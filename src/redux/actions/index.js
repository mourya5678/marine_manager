import axios from 'axios';
import { message as toast } from "antd";
import { pipDeleteTokenAuth, pipGetAccessToken } from '../../auth/Pip';
import { BASE_URL, BASE_URL1 } from '../../routes/BackendRoutes';
import { pageRoutes } from '../../routes/PageRoutes';

export const API_REQUEST = async (props) => {
    const { BASE = BASE_URL, BASE2 = BASE_URL1, url, method, data, headers, params, isErrorToast = true, isSuccessToast = true, isExternalAPI = false } = props;
    const token = pipGetAccessToken();
    const host = window.location.host; // MVP1 Ventures

    const requestOptions = {
        // url: BASE + url,

        // MVP1 Ventures
        // Handle n8n API calls
        url: isExternalAPI ? url : ((host.includes('localhost') ? BASE2 : BASE) + url),
        method,
        headers: {
            // Authorization: `Bearer ${token}`,

            // MVP1 Ventures
            // Remove auth for n8n API calls
            Authorization: isExternalAPI ? '' : `Bearer ${token}`,
            ...headers
        },
        params: method === "GET" ? params : undefined,
        data: method !== "GET" ? data : undefined,
    };
    console.log({ requestOptions })

    try {
        const response = await axios(requestOptions);
        if (method !== "GET" && response?.data?.success == true) {
            isSuccessToast == true && toast.success(response?.data?.message);
        } else if (response?.data?.success == false && method !== "GET") {
            isSuccessToast == true && toast.error(response?.data?.message);
        }
        return response?.data;
    } catch (error) {
        if (isErrorToast) {
            if (error.response) {
                if (error?.response?.data?.status == 401) {
                    toast.error(error?.response?.data?.message);
                    pipDeleteTokenAuth();
                    window.location.href = pageRoutes?.login;
                    return;
                }
                toast.error(error?.response?.data?.message);
            } else if (error.request) {
                toast.error("No response received from server");
            } else {
                toast.error("Error:", error.message);
            }
        }
        throw error.response;
    }
};