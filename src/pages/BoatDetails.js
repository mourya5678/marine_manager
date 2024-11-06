import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { pipViewDate } from '../auth/Pip';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { pageRoutes } from '../routes/PageRoutes';

const BoatDetails = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [isToggle, setIsToggle] = useState(false);
    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="boats_details" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <a
                                href="javascript:void(0)"
                                onClick={() => navigate(-1)}
                                className="ct_fs_24 text-dark ct_fw_600 ct_ff_roboto"
                            ><i className="fa-solid fa-arrow-left me-2"></i>Boat Detail</a
                            >
                        </div>
                        <div className="ct_white_bg_1">
                            <h4 className="ct_fs_24 text-start ct_fw_700 mb-3">Boat Details</h4>
                            <div className="row">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Owners Name</p>
                                        <p className="ct_fs_16 mb-2 ">{state?.data?.owners_name ?? 'NA'}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Email</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.email ?? 'NA'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Rego</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.rego ?? 'NA'}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">VIN</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.vin ?? 'NA'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Make</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.make ?? 'NA'}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Model</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.model ?? 'NA'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Boat Name</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.name ?? 'NA'}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">No. of Engine</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.engine_no ?? 'NA'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Engine Make</p>
                                        <p className="ct_fs_16 mb-2 ">{state?.data?.engine_make ?? 'NA'}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Engine Model</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.engine_model ?? 'NA'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Boat Length (Meter)</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.length ?? 0}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">When adding a new boat through the app</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.app_date ? pipViewDate(state?.data?.app_date) : 'NA'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Docking dates</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.docking_date ? pipViewDate(state?.data?.docking_date) : 'NA'}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Phone No.</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.phone_no ?? 'NA'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Booking from</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.book_from ? pipViewDate(state?.data?.book_from) : 'NA'}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Booking to</p>
                                        <p className="ct_fs_16 mb-2 ">{state?.data?.book_to ? pipViewDate(state?.data?.book_to) : 'NA'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mt-3 mb-md-0">
                                    <div className="ct_boat_dtl_img">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Boat Image</p>
                                        {state?.data?.avatar_url && <img src={state?.data?.avatar_url} alt="" />}
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-md-6 mx-auto">
                                    <div className="mt-2 w-100">
                                        <a href="javascript:void(0)" className="ct_outline_btn ct_outline_orange w-100 d-block text-center"
                                        // onClick={() => navigate(pageRoutes.task_description)}
                                        >Complete Maintenance Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoatDetails;