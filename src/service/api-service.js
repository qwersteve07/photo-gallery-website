import axios from 'axios';
import { getAuth } from 'service/local-data-service';
import get from 'lodash/get';
import camelcaseKeys from 'camelcase-keys';

const client_id = 'fvsSYOn3536jm-ZytKHKQFqq6FOABoDwnkG7KM3HwTw';
const client_secret = 'YZ3Fw4PtkCwOLBvhH5sh86kSwMdWQGixIgALFki_6Z0';
const API_VERSION = 'v1';

const prettify = obj => {
    return camelcaseKeys(obj, { deep: true });
};

const http = axios.create({
    baseURL: 'https://www.j606888.com:3002/api',
    timeout: 3000,
});

http.interceptors.request.use(config => requestInterceptor(config));
http.interceptors.response.use(value => prettify(value));

const accessToken = () => {
    let token = get(getAuth, 'accessToken', undefined);
    return token ? `Bearer ${token}` : '';
};

const requestInterceptor = config => {
    const token = accessToken();
    if (token) {
        config.headers['Authorization'] = accessToken();
    }
    return config;
};

export const signUp = async (name, email, password) => {
    const result = await http.post(`${API_VERSION}/users/sign_up`, {
        client_id: client_id,
        client_secret: client_secret,
        email,
        name,
        password,
    });

    return result.data.data;
};

export const signIn = async (email, password) => {
    const result = await http.post(`${API_VERSION}/users/sign_in`, {
        client_id: client_id,
        client_secret: client_secret,
        email,
        password,
    });

    return result.data.data;
};

export const me = async () => {
    return await http.get(`${API_VERSION}/users/me`).data.data;
};
