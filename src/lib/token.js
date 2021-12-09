const getToken = async () => {
    let user = localStorage.getItem('user');
    if(user){
        return JSON.parse(user).token;
    }
    return null

}

export default getToken;