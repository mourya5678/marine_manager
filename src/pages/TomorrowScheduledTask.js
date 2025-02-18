import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { pipViewDate, pipViewDate4 } from '../auth/Pip';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Sidebar from '../components/Sidebar';
import { getBoatData, getTomorrowTasks } from '../redux/actions/staffActions';
import { pageRoutes } from '../routes/PageRoutes';

const TomorrowScheduledTask = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [taskDetails, setTaskDetails] = useState();
    const { isLoading1, tomorrow_task } = useSelector((state) => state?.staffReducer);
    const [isToggle, setIsToggle] = useState(false);
    const [filterData, setFilterData] = useState();
    const [filterByDate, setFilterByDate] = useState();

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    }

    useEffect(() => {
        dispatch(getTomorrowTasks({ filter: "later" }));
    }, []);

    if (isLoading1) {
        return <Loader />
    }
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="schedule_boat" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-items-center justify-content-between gap-2 ct_flex_wrap_767">
                            <ul className="d-flex align-items-center gap-3 ">
                                <li className="ct_fs_24 ct_fw_700 ct_list_style_none">Tomorrow Scheduled Tasks</li>
                                <li className=" ct_fw_700 ct_fs_24 ct_list_style_none ms-2"></li>
                                <li className="ct_text_op_5 ct_fs_24 ct_fw_600">{tomorrow_task?.length ?? 0}{" "}{`${tomorrow_task?.length <= 1 ? 'Task' : 'Tasks'}`}
                                </li>
                            </ul>
                        </div>
                        <div className="row mt-5">
                            {tomorrow_task?.length != 0 ? tomorrow_task?.map((item, i) => (
                                <div className="col-xl-3 col-lg-6 mb-4">
                                    <a href="javascript:void(0)" className="text-dark">
                                        <div className="ct_boat_card ct_px_18"
                                            data-bs-toggle="modal" data-bs-target="#ct_view_task12"
                                            onClick={() => setTaskDetails({
                                                id: item?.id,
                                                boatId: `${(item?.boat?.rego ?? '')} - ${(item?.boat?.name ?? '')}`,
                                                description: item?.description,
                                                time_alloted: item?.time_alloted,
                                                quoted_value: item?.quoted_value,
                                                assignStaffId: item?.assign_to,
                                                supplierId: item?.assign_to == "OUTSOURCED" ? item?.supplier?.company_name : item?.assign_to == "STAFF" && `${(item?.staff?.full_name ?? '')} - ${(item?.staff?.role ?? '')}`,
                                                date_scheduled_from: pipViewDate4(item?.date_scheduled_from),
                                                date_scheduled_to: pipViewDate4(item?.date_scheduled_to),
                                                completed_at: item?.completed_at ? pipViewDate4(item?.completed_at) : '',
                                                status: item?.status,
                                                ct_checkbox_cbx: item?.isRecurring == 0 ? false : true
                                            })}>
                                            <p className="mb-2 ct_fs_18 ct_fw_700">No. {i + 1}</p>
                                            <p className="d-flex ct_fw_700 align-items-center gap-1 mb-3"><img src="img/boat_icon.svg.png" alt="" style={{ width: "12px" }} />{item?.boat?.name ?? 'NA'}</p>
                                            <p className="mb-0">{item?.description ? `${item?.description?.slice(0, 28)}${item?.description?.length > 28 ? " ..." : ''}` : ''}</p>
                                        </div>
                                    </a>
                                </div>
                            ))
                                :
                                <div className="col-xl-12 col-lg-12 text-center">
                                    <p className="mt-5 ct_fs_18 ct_fw_700">No task scheduled for Tomorrow</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade Committed_Price" id="ct_view_task12" tabindex="-1" aria-labelledby="ct_view_task12Label" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>Maintenance Task Details</strong></h4>
                                {taskDetails &&
                                    <form>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Assign To </strong><span className="ct_required_star">*</span></label>
                                                    <input
                                                        type="text"
                                                        id="assignStaffId"
                                                        className="form-control"
                                                        value={taskDetails.assignStaffId == "STAFF" ? "Internal Staff" : taskDetails.assignStaffId == "OUTSOURCED" ? "Out Source" : ''}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Maintenance Item Description</strong> <span className="ct_required_star">*</span></label>
                                                    <textarea
                                                        value={taskDetails.description}
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Time Allocated(Hours)</strong> <span className="ct_required_star">*</span></label>
                                                    <input
                                                        type="number"
                                                        id="time_alloted"
                                                        className="form-control"
                                                        value={taskDetails.time_alloted}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Quoted Value </strong> <span className="ct_required_star">*</span></label>
                                                    <input
                                                        id="quoted_value"
                                                        value={taskDetails.quoted_value}
                                                        type="number"
                                                        className="form-control"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Boat Registration </strong><span className="ct_required_star">*</span></label>
                                                    <textarea
                                                        type="text"
                                                        id="boatId"
                                                        className="form-control"
                                                        value={taskDetails.boatId ?? ''}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            {
                                                taskDetails.assignStaffId == "STAFF" ?
                                                    <div className="col-md-12">
                                                        <div className="form-group mb-3">
                                                            <label className="mb-1">
                                                                <strong>Staff</strong><span className="ct_required_star">*</span></label>
                                                            <input
                                                                type="text"
                                                                id="supplierId"
                                                                className="form-control"
                                                                value={taskDetails?.supplierId ?? ''}
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                                    :
                                                    taskDetails.assignStaffId == "OUTSOURCED" &&
                                                    < div className="col-md-12">
                                                        <div className="form-group mb-3">
                                                            <label className="mb-1">
                                                                <strong>Supplier</strong><span className="ct_required_star">*</span></label>
                                                            <input
                                                                type="text"
                                                                id="supplierId"
                                                                className="form-control"
                                                                value={taskDetails?.supplierId ?? ''}
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                            }
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Date Scheduled From </strong> <span className="ct_required_star">*</span></label>
                                                    <input
                                                        id="date_scheduled_from"
                                                        type="date"
                                                        className="form-control"
                                                        value={taskDetails.date_scheduled_from}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Date Scheduled To </strong> <span className="ct_required_star">*</span></label>
                                                    <input
                                                        id="date_scheduled_to"
                                                        type="date"
                                                        className="form-control"
                                                        value={taskDetails.date_scheduled_to}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Completed At </strong> <span className="ct_required_star">*</span></label>
                                                    <input
                                                        id="completed_at"
                                                        type="date"
                                                        className="form-control"
                                                        value={taskDetails.completed_at}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">

                                            </div>
                                            <div className='col-md-6'>
                                                <div className='form-group mb-3'>
                                                    <label>&nbsp;</label>
                                                    <div className="ct_checkbox_main"><div>
                                                        <input
                                                            type="checkbox"
                                                            id="ct_checkbox_cbx"
                                                            className="ct_hidden-xs-up"
                                                            value={taskDetails.ct_checkbox_cbx}
                                                            checked={taskDetails.ct_checkbox_cbx}
                                                            readOnly
                                                        /><label for="ct_checkbox_cbx" className="ct_checkbox_cbx"></label></div><p className="mb-0">Is Recurring</p></div>
                                                </div>
                                            </div>
                                            <div className="modal-footer justify-content-center border-0">
                                                <button type="button" className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal"
                                                    onClick={() => setTaskDetails()}>Close</button>
                                            </div>
                                        </div>
                                    </form>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TomorrowScheduledTask;