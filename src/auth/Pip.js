import { message } from 'antd';
import moment from 'moment';

export const curSym = '$';

export const pipSetAccessToken = (token) => {
    if (!token) return;
    else localStorage.setItem('eg_token', token);
};

export const pipGetAccessToken = () => {
    return localStorage.getItem('eg_token');
};

export const pipViewDate = (date) => {
    return moment(date).format("DD-MM-YYYY");
};

export const pipViewDate3 = (date) => {
    return moment(date).format("MM/DD/YYYY");
};

export const pipViewDate2 = (date) => {
    return moment(date).format("MM-DD-YYYY");
};

export const pipViewDate4 = (date) => {
    return moment(date).format("YYYY-MM-DD");
};

export const pipDeleteToken = () => {
    localStorage.clear();
    message.success("Successfully logged out");
};

export const pipDeleteTokenAuth = () => {
    localStorage.clear();
};

export const pipSuccessMessage = (message) => {
    return message.success(message)
};

export const pipErrorMessage = (message) => {
    return message.error(message)
};

export const pipSaveProfile = (profile) => {
    if (!profile)
        return;
    localStorage.setItem('user_data', JSON.stringify(profile));
};

export const pipGetProfile = () => {
    return JSON.parse(localStorage.getItem('user_data'));
};