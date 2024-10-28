import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { pipDeleteToken, pipSaveProfile, pipGetProfile } from '../auth/Pip';
import { pageRoutes } from '../routes/PageRoutes';
import { getBussinessProfileData } from '../redux/actions/authActions';

const Header = ({ onClick }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, bussiness_profile } = useSelector((state) => state?.authReducer);
    const [profileData, setProfileData] = useState();

    useEffect(() => {
        const dat = pipGetProfile()
        if (dat?.company_name == '') {
            dispatch(getBussinessProfileData());
        } else {
            setProfileData(dat);
        }
    }, []);

    useEffect(() => {
        const dat = pipGetProfile();
        if (dat?.company_name == '' || !dat) {
            if (bussiness_profile) {
                const data = {
                    name: bussiness_profile?.first_name ?? '',
                    company_name: bussiness_profile?.company_name ?? ''
                }
                pipSaveProfile(data)
                setProfileData(data);
            }
        }
    }, [bussiness_profile]);



    const onHandleLogout = () => {
        pipDeleteToken();
        navigate(pageRoutes.login);
    };

    if (isLoading) {
        return "Loading..."
    }
    return (
        <div>
            <div className="ct_toggle_side" onClick={onClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="ct_dashboard_head">
                <div className="ms-auto d-flex align-items-center gap-3 justify-content-end">
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.quick_lead)} className="ct_red_btn">A new lead received</a>
                    <a href="javascript:void(0)" className="ct_logout_btn ct_white_btn">
                        <img src="img/building_icon_2.svg" alt="" onClick={() => navigate(pageRoutes.business_profile)} />
                        <div className="ct_user_name_info" onClick={() => navigate(pageRoutes.business_profile)}>
                            <h6>{profileData?.name ?? ''}</h6>
                            <p className="mb-0">{profileData?.company_name ?? ''}</p>
                        </div>
                        <svg onClick={onHandleLogout} width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 0.5C4.5 0.5 0 5 0 10.5C0 16 4.5 20.5 10 20.5C15.5 20.5 20 16 20 10.5C20 5 15.5 0.5 10 0.5ZM10 16.4C6.8 16.4 4.1 13.8 4.1 10.5C4.1 8.8 4.9 7.1 6.2 6C6.6 5.7 7.3 5.7 7.6 6.1C8 6.6 7.9 7.2 7.5 7.6C6.6 8.3 6.1 9.4 6.1 10.6C6.1 12.7 7.8 14.5 10 14.5C12.2 14.5 13.9 12.8 13.9 10.6C13.9 9.5 13.4 8.4 12.5 7.6C12.1 7.3 12 6.6 12.4 6.2C12.8 5.8 13.4 5.7 13.8 6.1C15.1 7.2 15.9 8.9 15.9 10.6C15.9 13.8 13.2 16.4 10 16.4ZM10 4C10.5 4 11 4.4 11 5V8.7C11 9.2 10.5 9.7 10 9.7C9.5 9.7 9 9.2 9 8.7V5C9 4.4 9.5 4 10 4Z"
                                fill="#A10000" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;