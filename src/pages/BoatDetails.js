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

    console.log(state?.data, "state?.data")

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
                                className="ct_fs_24 text-dark ct_fw_600 ct_ff_roboto">
                                <i className="fa-solid fa-arrow-left me-2"></i>
                                Boat Detail
                            </a>
                            <a
                                href="javascript:void(0)"
                                onClick={() => navigate(pageRoutes.update_boat, { state: { data: state?.data } })}
                                className="ct_fs_24 text-dark text-end ct_fw_600 ct_ff_roboto">
                                Update Boat
                            </a>
                        </div>
                        <div className="ct_white_bg_1">
                            <h4 className="ct_fs_24 text-start ct_fw_700 mb-3">Boat Details</h4>
                            <div className="row ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Owners Name</p>
                                        <p className="ct_fs_16 mb-2 ">{state?.data?.owners_name}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Email</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.email}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Rego</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.rego}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">VIN</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.vin}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Make</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.make}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Model</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.model}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Boat Name</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.name}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">No. of Engine</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.engine_no}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Engine Make</p>
                                        <p className="ct_fs_16 mb-2 ">{state?.data?.engine_make}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Engine Model</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.engine_model}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Boat Length (Meter)</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.length}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">When adding a new boat through the app</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.app_date && pipViewDate(state?.data?.app_date)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Docking dates</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.docking_date && pipViewDate(state?.data?.docking_date)}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Phone No.</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.phone_no}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Booking from</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.book_from && pipViewDate(state?.data?.book_from)}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Booking to</p>
                                        <p className="ct_fs_16 mb-2 ">{state?.data?.book_to && pipViewDate(state?.data?.book_to)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mt-3 mb-md-0">
                                    <div className="ct_boat_dtl_img">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Boat Image</p>
                                        {state?.data?.avatar_url && <img src={state?.data?.avatar_url} alt="" data-bs-toggle="modal" data-bs-target="#ct_view_image" />}
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

            <div className="modal fade Committed_Price" id="ct_view_image" tabindex="-1" aria-labelledby="ct_view_imageLabel" aria-hidden="true">
                <div className="modal-dialog modal-md modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-2">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>Image Preview </strong></h4>
                                {state?.data?.avatar_url && <img src={state?.data?.avatar_url} style={{
                                    height: "356px",
                                    objectFit: "contain"
                                }} />}
                            </div>
                            <div className="modal-footer justify-content-center border-0 ct_flex_wrap_575 gap-2">
                                <button type="button" className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoatDetails;