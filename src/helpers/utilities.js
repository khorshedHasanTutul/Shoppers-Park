export const humanizeShortDateTime = (enData) => {
  const regex = /\d+/g;
  const timestamp = (enData.match(regex) || []).join("");

  if (typeof +timestamp === "number") {
    const date = new Date(+timestamp);

    return `${date.toLocaleString("en-GB", {
      dateStyle: "short",
    })} ${date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })}`;
  }

  return "Error parsing date";
};

export const goTO = () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 0);
};

export const paramsUrlGenerator = (params) => {
  const url = "?";
  const paramsStrings = [];

  for (const [key, value] of Object.entries(params)) {
    paramsStrings.push(`${key}=${value}`);
  }

  return url + paramsStrings.join("&");
};

export const transformQuery = (text) => {
  let url = "?query=";
  let query = text.split(" ");
  return url + query.map((item) => item).join("%20");
};
