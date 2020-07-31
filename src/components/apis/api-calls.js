import axios from 'axios';
import config from '../../config/config';

const instance = axios.create({
    baseURL: config.baseURL,
    headers: {
        'content-type':'application/json',
    },
});

export default {
    getOtp: (mobile) =>
    instance({
        'method': 'POST',
        'url':'/user/get_otp/',
        'data': {
            'username':mobile,
            'user_type':'RE'
        },
    }),
    getToken: (data) =>
    instance({
        'method': 'POST',
        'url':'/user/get_token/',
        'data': data,
    }),
    getUserProfile: (token) =>
    instance({
        'method': 'GET',
        'url':'/user/user_profile/',
        'Auth': 'JWT',
        headers: {
            'content-type':'application/json',
            'Authorization': "Bearer " + token,
            // 'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkzMjQyNzU1LCJqdGkiOiI4YWE3NGVlNmJhNjM0YTBmOGUxMTQ1OWJmMjc5OGYyZiIsInVzZXJfaWQiOjd9.pTl-S87MQglpR7Sgt7Q9lJ7YSWWBev79mPztf2m3Dj4"
        },
    }),
    updateUserProfile: (data, token) =>
    instance({
        'method': 'PUT',
        'url':'/user/user_profile/',
        'Auth': 'JWT',
        'data': data,
        headers: {
            'content-type':'application/json',
            'Authorization': "Bearer " + token,
            // 'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkzMjQyNzU1LCJqdGkiOiI4YWE3NGVlNmJhNjM0YTBmOGUxMTQ1OWJmMjc5OGYyZiIsInVzZXJfaWQiOjd9.pTl-S87MQglpR7Sgt7Q9lJ7YSWWBev79mPztf2m3Dj4"
        },
    }),
}