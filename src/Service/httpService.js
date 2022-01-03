import getToken from "../lib/token";

const BASE_URL = 'https://finepharma.boniksoftware.com';

export const post = async (
    { url,
        headers = {},
        payload = {},
        before = () => { },
        successed = (data) => { },
        failed = (data) => { },
        always = (data) => { },
        map = (data) => { return data.Data },
        dataPath = '' }
) => {
    const token = await getToken();
    const tokenHeader = {};
    if(token){
        tokenHeader.datacontent = token;
    }


    before();

    const response = await fetch(`${BASE_URL}/${url}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            ...headers,
            ...tokenHeader
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
    
    const transformedData = map(data);

    always(data);
    successed(transformedData);
    return transformedData;
}


export const get = async (
    { url,
        headers = {},
        before = () => { },
        successed = (data) => { },
        failed = (data) => { },
        always = (data) => { },
        map = (data) => { return data.Data },
        dataPath = ''
    }
) => {

    before();

    const response = await fetch(`${BASE_URL}/${url}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'datacontent': await getToken(),
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

    const transformedData = map(data);

    always(data);
    successed(transformedData);
    return transformedData;
}



export const file = async (
    { url,
        headers = {},
        payload = {},
        before = () => { },
        successed = (data) => { },
        failed = (data) => { },
        always = (data) => { },
        map = (data) => { return data.Data },
    }
) => {

    before();

    const formData = new FormData();
    for(const [key, value] of Object.entries(payload)){
        formData.append(key, value);
    }


    const response = await fetch(`${BASE_URL}/${url}`, {
        method: 'POST',
        headers: {
            'datacontent': await getToken(),
            ...headers
        },
        body: formData
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

    const transformData = map(data);

    always(data);
    successed(transformData);
    return data.Data;
}
export const http = { post, get, file };