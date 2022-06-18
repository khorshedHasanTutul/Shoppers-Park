import getToken from "../lib/token";
import { put } from "./form";

// import { baseUrl as BASE_URL } from "./ImgService";
export const BASE_URL = "";

export const post = async ({
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
      "content-type": "application/json",
      ...headers,
    },
    body: JSON.stringify(payload),
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
  always(data);
  return data;
};

export const PUT = async ({
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
    method: "PUT",
    headers: {
      "content-type": "application/json",
      ...headers,
    },
    body: JSON.stringify(payload),
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

  always(data);
  return data;
};

export const get = async ({
  url,
  headers = {},
  before = () => {},
  successed = (data) => {},
  failed = (data) => {},
  always = (data) => {},
  map = (data) => {
    return data;
  },
}) => {
  const token = await getToken();
  if (token) {
    headers["Authorization"] = "Bearer " + token;
  }

  before();

  const response = await fetch(`${BASE_URL}${url}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      ...headers,
    },
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
  always(data);
  return data;
};

export const file = async ({
  url,
  headers = {},
  payload = {},
  before = () => {},
  successed = (data) => {},
  failed = (data) => {},
  always = (data) => {},
  map = (data) => {
    return data.Data;
  },
}) => {
  before();

  const formData = new FormData();
  for (const [key, value] of Object.entries(payload)) {
    formData.append(key, value);
  }
  const token = await getToken();
  if (token) {
    headers["Authorization"] = "Bearer " + token;
  }

  const response = await fetch(`${BASE_URL}/${url}`, {
    method: "POST",
    headers: {
      // datacontent: await getToken(),
      ...headers,
    },
    body: formData,
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

export const httpV2 = { post, get, file, PUT, put };
