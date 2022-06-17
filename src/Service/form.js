import getToken from "../lib/token";
import { BASE_URL } from "./httpService2";

export const put = async ({
  url,
  headers = {},
  payload = {},
  before = () => {},
  successed = (data) => {},
  failed = (data) => {},
  always = (data) => {},
  map = (data) => {
    return data;
  },
  dataPath = "",
}) => {
  const token = await getToken();
  if (token) {
    headers["Authorization"] = "Bearer " + token;
  }

  before();

  const response = await fetch(`${BASE_URL}${url}`, {
    method: "POST",
    headers: {
      // "content-type": "multipart/form-data",
      ...headers,
    },
    body: payload,
  });

  const data = await response.json();

  if (data.statusCode >= 200 && data.statusCode < 300) {
    const transformData = map(data);
    successed(transformData);
  }
  if (data.statusCode >= 400 && data.statusCode < 500) {
    failed(data);
  }
  if (data.statusCode >= 500 && data.statusCode < 600) {
    failed(data);
    throw new Error(`${data.message || "Error Occured"}`);
  }

  //   if (data.IsError) {
  //     always(data);
  //     failed(data, data.Msg);
  //     throw new Error(`${data.Msg || "Login failed"}`);
  //   }

  always(data);
  return data;
};
