import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.BASE_URL,
});

// GET
export const get = async (path, option = {}) => {
    const response = await httpRequest.get(path, option);
    return response.data;
};

// export const regiser = async (path, payload) => {
//     await axios.post(path, payload);
// };

// POST
// export const post = async (path, option = {}) => {
//     const res = await httpRequest.post(path, option);
//     return res;
// };

export default httpRequest;
