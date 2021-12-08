// import getToken from "../helpers/token";

const BASE_URL = 'https://finepharma.boniksoftware.com';

export const post = async (
    { url,
        headers = {},
        payload = {},
        before = () => { },
        successed = (data) => { },
        failed = (data) => { },
        always = (data) => { },
        map = (data) => { },
        dataPath = '' }
) => {

    before();

    const response = await fetch(`${BASE_URL}/${url}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            // 'datacontent': await getToken(),
            ...headers
        },
        body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
        always(data);
        failed(data, data.message);
        throw new Error(data.message || 'Login failed');
    }
    if (data.IsError) {
        always(data);
        failed(data, data.Msg);
        throw new Error(`${data.Msg || 'Login failed'}`);
    }
    
    always(data);
    successed(data.Data);
    return data.Data;
}


export const get = async (
    { url,
        headers = {},
        before = () => { },
        successed = (data) => { },
        failed = (data) => { },
        always = (data) => { },
        map = () => { },
        dataPath = ''
    }
) => {

    before();

    const response = await fetch(`${BASE_URL}/${url}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            // 'datacontent': await getToken(),
            ...headers
        },
    });

    const data = await response.json();

    if (!response.ok) {
        always(data);
        failed(data, data.message);
        throw new Error(data.message || 'Login failed');
    }

    if (data.IsError) {
        always(data);
        failed(data, data.Msg);
        throw new Error(`${data.Msg || 'Login failed'}`);
    }

    always(data);
    successed(data.Data);
    return data.Data;
}

export const http = { post, get };