import { Platform } from 'react-native';
import axios, { CancelToken } from 'axios';
import { CANCEL } from 'redux-saga'
import AppAuthent from './AppAuthent';
const token = AppAuthent.createInstance();

const instance = axios.create({
    baseURL: token.getServerUrl(),
    timeout: Platform.OS == 'ios' || Platform.OS == 30000 ? 30000 : 60000,
    validateStatus: (status) => {
        return true;
    },
});

instance.interceptors.request.use(function (config) {
    if (token) {
        config.headers.common['Authorization'] = `Bearer ${token.getZpwTokent()}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// remove field null
const clean = (obj) => {
    if (!obj) {
        return obj
    }
    let data = { ...obj }
    for (var propName in data) {
        if (data[propName] === null || data[propName] === undefined) {
            delete data[propName];
        }
    }
    try {
        return JSON.stringify(data) === '{}' ? null : data
    } catch (error) {
        return data
    }
}

export default (options) => {
    console.log("options request", options);
    const data = clean(options.data);
    const params = clean(options.params);
    const source = CancelToken.source();
    const promise = new Promise((resolve, reject) => {
        instance({
            ...options,
            data,
            params,
            cancelToken: source.token
        })
            .then(response => resolve(response.data))
            .catch(error => {
                reject(error)
                throw error
            })
    })
    promise[CANCEL] = () => source.cancel();
    return promise
}