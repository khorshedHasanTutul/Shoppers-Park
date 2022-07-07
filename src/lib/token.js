const getToken = async () => {
  let user = localStorage.getItem("USERV1.1");
  if (user) {
    return JSON.parse(user).token;
  }
  return null;
};

export default getToken;
