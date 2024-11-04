import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { pipDeleteToken, pipSaveProfile, pipGetProfile } from '../auth/Pip';
import { pageRoutes } from '../routes/PageRoutes';
import { getBussinessProfileData } from '../redux/actions/authActions';
import Loader from './Loader';

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
        return <Loader />
    }
    return (
        <div>
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
                            <svg data-bs-toggle="modal"
                                data-bs-target="#ct_logout_modal" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 0.5C4.5 0.5 0 5 0 10.5C0 16 4.5 20.5 10 20.5C15.5 20.5 20 16 20 10.5C20 5 15.5 0.5 10 0.5ZM10 16.4C6.8 16.4 4.1 13.8 4.1 10.5C4.1 8.8 4.9 7.1 6.2 6C6.6 5.7 7.3 5.7 7.6 6.1C8 6.6 7.9 7.2 7.5 7.6C6.6 8.3 6.1 9.4 6.1 10.6C6.1 12.7 7.8 14.5 10 14.5C12.2 14.5 13.9 12.8 13.9 10.6C13.9 9.5 13.4 8.4 12.5 7.6C12.1 7.3 12 6.6 12.4 6.2C12.8 5.8 13.4 5.7 13.8 6.1C15.1 7.2 15.9 8.9 15.9 10.6C15.9 13.8 13.2 16.4 10 16.4ZM10 4C10.5 4 11 4.4 11 5V8.7C11 9.2 10.5 9.7 10 9.7C9.5 9.7 9 9.2 9 8.7V5C9 4.4 9.5 4 10 4Z"
                                    fill="#A10000" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div
                className="modal fade ct_assets_modal"
                id="ct_logout_modal"
                tabIndex={-1}
                aria-labelledby="ct_logout_modalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0 pt-0">
                            <button
                                type="button"
                                className="btn-close ct_cloose_btn"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="fa-solid fa-xmark" />
                            </button>
                        </div>
                        <div className="modal-body border-0 ">
                            <svg
                                width={21}
                                height={20}
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.0117 0C4.51172 0 0.0117188 4.5 0.0117188 10C0.0117188 15.5 4.51172 20 10.0117 20C15.5117 20 20.0117 15.5 20.0117 10C20.0117 4.5 15.5117 0 10.0117 0ZM10.0117 15.9C6.81172 15.9 4.11172 13.3 4.11172 10C4.11172 8.3 4.91172 6.6 6.21172 5.5C6.61172 5.2 7.31172 5.2 7.61172 5.6C8.01172 6.1 7.91172 6.7 7.51172 7.1C6.61172 7.8 6.11172 8.9 6.11172 10.1C6.11172 12.2 7.81172 14 10.0117 14C12.2117 14 13.9117 12.3 13.9117 10.1C13.9117 9 13.4117 7.9 12.5117 7.1C12.1117 6.8 12.0117 6.1 12.4117 5.7C12.8117 5.3 13.4117 5.2 13.8117 5.6C15.1117 6.7 15.9117 8.4 15.9117 10.1C15.9117 13.3 13.2117 15.9 10.0117 15.9ZM10.0117 3.5C10.5117 3.5 11.0117 3.9 11.0117 4.5V8.2C11.0117 8.7 10.5117 9.2 10.0117 9.2C9.51172 9.2 9.01172 8.7 9.01172 8.2V4.5C9.01172 3.9 9.51172 3.5 10.0117 3.5Z"
                                    fill="#DC0202"
                                />
                            </svg>
                            <h4 className="text-center mb-4 ct_fw_600">Log Out Account</h4>
                            <p className="text-center ct_grey_text">
                                Are you sure, you want to logout? once you logout <br /> you
                need to login again.
              </p>
                            <div className="modal-footer border-0 justify-content-center">
                                <button
                                    type="button"
                                    className="ct_blue_btn py-2 h-auto"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                </button>
                                <a
                                    href="javascript:void(0)"
                                    onClick={() => onHandleLogout()}
                                    type="button"
                                    data-bs-dismiss="modal"
                                    className=" bg-danger  ct_blue_btn text-white justify-content-center  py-2 h-auto"
                                    style={{ borderColor: "rgb(220, 53, 69)" }}
                                >
                                    Logout
                </a>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;