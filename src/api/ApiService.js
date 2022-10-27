import axios from "axios";

export const API_HOST = `http://127.0.0.1:3001/`;

export class ApiService {
    get(url, params = {}) {
        return axios({
            baseURL: API_HOST,
            method: 'GET',
            url: url,
            params: params,
        })
            .catch((err) => {
                console.log('error: ', err)
            })
    }
}
