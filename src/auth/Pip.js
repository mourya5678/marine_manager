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
    return moment.utc(date).format("DD-MM-YYYY");
};

export const pipViewDate3 = (date) => {
    return moment.utc(date).format("MM/DD/YYYY");
};

export const pipViewDate2 = (date) => {
    return moment.utc(date).format("MM-DD-YYYY");
};

export const pipViewDate4 = (date) => {
    return moment.utc(date).format("YYYY-MM-DD");
};

export const pipViewDate5 = (date) => {
    return moment.utc(date).format("YYYY,MM,DD");
};

export const pipDeleteToken = () => {
    // localStorage.clear();
    localStorage.removeItem("m_user_data");
    localStorage.removeItem("eg_token");
    message.success("Successfully logged out");
};

export const pipDeleteTokenAuth = () => {
    localStorage.removeItem("m_user_data");
    localStorage.removeItem("eg_token");
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
    localStorage.setItem('m_user_data', JSON.stringify(profile));
};

export const pipGetProfile = () => {
    return JSON.parse(localStorage.getItem('m_user_data'));
};

