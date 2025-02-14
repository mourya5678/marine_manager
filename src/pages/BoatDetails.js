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

    console.log(state?.data, { state })
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
                                className="ct_fs_24 text-dark ct_fw_600 ct_ff_roboto">
                                <i className="fa-solid fa-arrow-left me-2"></i>
                                Boat Detail
                            </a>
                        </div>
                        <div className="ct_white_bg_1">
                            <h4 className="ct_fs_24 text-start ct_fw_700 mb-3">Boat Details</h4>
                            <div className="row ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Owner&apos;s Name</p>
                                        <p className="ct_fs_16 mb-2 ">{state?.data?.owners_name ?? ''}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Email</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.email ?? ''}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Phone No.</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.phone_no ?? ''}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Rego</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.rego ?? ''}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Boat Name</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.name ?? ''}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Boat Type</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.boat_type ?? ''}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">HIN</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.vin ?? ''}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Make</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.make}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Model</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.model ?? ''}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">No. Of Engine</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.engine_no ?? ''}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Engine Make</p>
                                        <p className="ct_fs_16 mb-2 ">{state?.data?.engine_make ?? ''}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Engine Model</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.engine_model ?? ''}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Boat Length (Meter)</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.length ?? ''}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Boat Profile Created Date</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.app_date && pipViewDate(state?.data?.app_date)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Booking From</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.book_from && pipViewDate(state?.data?.book_from)}</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Booking To</p>
                                        <p className="ct_fs_16 mb-2 ">{state?.data?.book_to && pipViewDate(state?.data?.book_to)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ct_mt_20 ct_border_bottom_1">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="ct_boat_dtl_left_cnt">
                                        <p className="ct_fs_16 mb-3 ct_fw_700">Docking Dates</p>
                                        <p className="ct_fs_16 mb-2">{state?.data?.docking_date ? pipViewDate(state?.data?.docking_date) : ''}</p>
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
                            <div className="d-flex align-items-center gap-3 mt-4 ct_flex_wrap_575">
                                <button type="button" className="ct_outline_btn ct_outline_orange w-100"
                                    onClick={() => navigate(pageRoutes.task_description, { state: { data: state.data } })}
                                >Complete Maintenance Details</button>
                                <button type="button" className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit w-100"

                                    onClick={() => navigate(pageRoutes.update_boat, { state: { data: state.data } })}
                                >Update Boat</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade Committed_Price" id="ct_view_image" tabindex="-1" aria-labelledby="ct_view_imageLabel" aria-hidden="true" data-bs-backdrop='static' data-bs-keyboard="false">
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