import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { pageRoutes } from '../routes/PageRoutes';

const BoatDetails = () => {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = useState(false);
    const onHandleClick = () => {
        setIsToggle(!isToggle);
    }

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
                                        <p className="ct_fs_16 mb-3">Owners Name</p>
                                        <p className="ct_fs_16 mb-2 ct_fw_700">Gertrude Ferry</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_img">
                                        <img src="img/baot_img_34.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3">Rego</p>
                                        <p className="ct_fs_16 mb-2 ct_fw_700">ABCD123</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3">HIN</p>
                                        <p className="ct_fs_16 mb-2 ct_fw_700">ABC12345D404</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3">Make</p>
                                        <p className="ct_fs_16 mb-2 ct_fw_700">Beneteau</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3">Model</p>
                                        <p className="ct_fs_16 mb-2 ct_fw_700">JPFTV455</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3">Boat Name</p>
                                        <p className="ct_fs_16 mb-2 ct_fw_700">Boat Name 1</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3">No. of Engine</p>
                                        <p className="ct_fs_16 mb-2 ct_fw_700">KTA1925896</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3">Engine Make</p>
                                        <p className="ct_fs_16 mb-2 ct_fw_700">Cummins</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3">Engine Model</p>
                                        <p className="ct_fs_16 mb-2 ct_fw_700">KTA19</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3">Boat Length (Meter)</p>
                                        <p className="ct_fs_16 mb-2 ct_fw_700">6</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3">When adding a new boat through the app</p>
                                        <p className="ct_fs_16 mb-2 ct_fw_700">03-12-2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3">Docking dates</p>
                                        <p className="ct_fs_16 mb-2 ct_fw_700">03-12-2024</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3">Booking dates</p>
                                        <p className="ct_fs_16 mb-2 ct_fw_700">03-12-2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3">Email</p>
                                        <p className="ct_fs_16 mb-2 ct_fw_700">Josie_Predovic@yahoo.com</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3">Phone No.</p>
                                        <p className="ct_fs_16 mb-2 ct_fw_700">888-888-9990</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 ms-auto">
                                    <div className="mt-4 w-100">
                                        <a href="javascript:void(0)" className="ct_outline_btn ct_outline_orange w-100 d-block text-center" onClick={() => navigate(pageRoutes.task_description)}>Complete Maintenance Details</a>
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