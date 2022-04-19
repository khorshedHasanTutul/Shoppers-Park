const getToken = async () => {
  let user = localStorage.getItem('USER');
  if (user) {
    return JSON.parse(user).token;
  }
  return "";
};

export const getTokenSync = () => {
  let user = localStorage.getItem('USER');
  if (user) {
    return JSON.parse(user).token;
  }

  return "";
};

export default getToken;
