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



