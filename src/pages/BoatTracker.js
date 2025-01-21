import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { pipViewDate, pipViewDate4 } from '../auth/Pip';
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from 'react-redux';
import { getAllTaskByID } from '../redux/actions/maintainedBoatsActions';
import Loader from '../components/Loader';
import ReactPagination from '../layout/ReactPagination';
import PaginationDropdown from '../layout/PaginationDropdown';
import { getBoatData, getStaffData, getSupplierData } from '../redux/actions/staffActions';

const BoatTracker = () => {
    const navigate = useNavigate();
    const { state } = useLocation()
    const [isToggle, setIsToggle] = useState(false);
    const { isLoading2, allTasks_by_id } = useSelector((state) => state?.maintainedReducer);
    const { isLoading1, staff_data, all_boats, supplier_data } = useSelector((state) => state?.staffReducer);
    const dispatch = useDispatch();
    const [isShow, setIsShow] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [usersPerPage, setUserPerPages] = useState(5);
    const [taskDetails, setTaskDetails] = useState();
    const [series, setSeries] = useState();

    const displayUsers = allTasks_by_id?.slice(
        currentPage * usersPerPage,
        (currentPage + 1) * usersPerPage
    );

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    const options = {
        chart: {
            height: 350,
            type: 'rangeBar',
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        xaxis: {
            type: 'datetime'
        }
    };

    useEffect(() => {
        dispatch(getAllTaskByID({ payload: state?.data?.id }));
        dispatch(getStaffData());
        dispatch(getBoatData());
        dispatch(getSupplierData());
    }, []);

    useEffect(() => {
        setIsShow(false)
        let data12 = [];
        allTasks_by_id.map((item, i) => (
            item?.status != 1 &&
            data12?.push({
                x: `${item?.description?.slice(0, 20)} ${i + 1}`,
                y: [new Date(new Date(item?.date_scheduled_from)).getTime(),
                new Date(new Date(item?.date_scheduled_to).setHours(23, 59, 59, 999)).getTime()
                ],
                fillColor: item?.status == 1 ? "#6929FF" : "#ffb429"
            })
        ))
        setSeries([{
            data: data12
        }]);
        setIsShow(true)
    }, [allTasks_by_id]);

    if (isLoading2) {
        return <Loader />;
    };
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="tracker" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <a href="javascript:void(0)" onClick={() => navigate(-1)} className="ct_fs_18 ct_fw_700 text-dark ct_ff_roboto"><i className="fa-solid fa-arrow-left-long"></i> Back</a>
                        </div>
                        <div className="table-responsive mt-3">
                            <table className="table ct_project_table ct_custom_table_main">
                                <thead>
                                    <tr>
                                        <th>S.No.</th>
                                        <th className="ct_ff_roboto">Maintenance Item Description</th>
                                        <th className="ct_ff_roboto">Boat Registration</th>
                                        <th className="ct_ff_roboto">Supplier</th>
                                        <th className="ct_ff_roboto">Staff Allocated</th>
                                        <th className="ct_ff_roboto">Date Scheduled</th>
                                        <th className="ct_ff_roboto">Action</th>
                                    </tr>
                                </thead>
                                {
                                    displayUsers?.length != 0 ?
                                        <tbody>
                                            {
                                                displayUsers?.length != 0 && displayUsers?.map((item, i) => (
                                                    <tr>
                                                        <td>{i + 1}</td>
                                                        <td>{item?.description ? `${item?.description?.slice(0, 28)}${item?.description?.length > 28 ? "..." : ''}` : ''}</td>
                                                        <td>{`${(item?.boat?.rego ?? '')} - ${(item?.boat?.name ?? '')}` ?? ''}</td>
                                                        <td className={item?.supplier?.company_name ? "" : "ct_fw_600"}>{item?.supplier?.company_name ?? 'STAFF'}</td>
                                                        <td className={item?.staff?.full_name ? "" : "ct_fw_600"}>{item?.staff?.full_name ?? 'OUTSOURCED'}</td>
                                                        <td>{`${pipViewDate(item?.date_scheduled_from)} - ${pipViewDate(item?.date_scheduled_to)}`}</td>
                                                        <td className="text-end ct_fw_600 ab_pointer">
                                                            <i className="fa-solid fa-eye me-2"
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
                                                                    status: item?.status,
                                                                    ct_checkbox_cbx: item?.isRecurring == 0 ? false : true
                                                                })}
                                                                data-bs-toggle="modal" data-bs-target="#ct_view_task12"
                                                            ></i>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                        :
                                        <tfoot>
                                            <tr>
                                                <td className="text-center bg-transparent border-0" colSpan="7">
                                                    <div className="text-center">
                                                        <p className="mb-0 mt-3 ct_fs_18 ct_fw_700 ct_ff_poppin ct_clr_8C98A9 text-center">No task found</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tfoot>
                                }
                            </table>
                        </div>
                        <div className="mt-3">
                            {allTasks_by_id?.length >= 5 &&
                                allTasks_by_id?.length > 0 && <div className="d-flex align-items-center flex-wrap justify-content-between gap-3 mb-3">
                                    <PaginationDropdown
                                        onChange={(val) => {
                                            setUserPerPages(val);
                                            setCurrentPage(0);
                                        }}
                                    />
                                    <ReactPagination
                                        pageCount={Math.ceil(
                                            allTasks_by_id.length / usersPerPage
                                        )}
                                        onPageChange={handlePageClick}
                                        currentPage={currentPage}
                                    />
                                </div>
                            }
                        </div>
                        <div className="ct_white_bg_1">
                            <div className='d-flex align-items-center gap-2'>
                                {/* <p className='mb-0 d-flex align-items-center gap-2'>Completed: <span className='ct_graph_legend ct_complete_graph_clr'></span></p> */}
                                <p className='mb-0 d-flex align-items-center gap-2'>Ongoing: <span className='ct_graph_legend ct_inprogress_graph_clr'></span></p>
                            </div>
                            {options && isShow == true &&
                                <Chart options={options} series={series} type="rangeBar" height={350} />
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade Committed_Price" id="ct_view_task12" tabindex="-1" aria-labelledby="ct_view_task12Label" aria-hidden="true" data-bs-backdrop='static' data-bs-keyboard="false">
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
                                                    <label className="mb-1"><strong>Assign To </strong></label>
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
                                                    <label className="mb-1"><strong>Maintenance Item Description</strong></label>
                                                    <textarea
                                                        value={taskDetails.description}
                                                        className="form-control"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Time Allocated(Hours)</strong></label>
                                                    <input
                                                        type="number"
                                                        id="time_alloted"
                                                        className="form-control"
                                                        onWheel={() => document.activeElement.blur()}
                                                        value={taskDetails.time_alloted}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Quoted Value </strong></label>
                                                    <input
                                                        id="quoted_value"
                                                        value={taskDetails.quoted_value}
                                                        type="number"
                                                        onWheel={() => document.activeElement.blur()}
                                                        className="form-control"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Boat Registration </strong></label>
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
                                                                <strong>Staff</strong></label>
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
                                                                <strong>Supplier</strong></label>
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
                                                    <label className="mb-1"><strong>Date Scheduled From </strong></label>
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
                                                    <label className="mb-1"><strong>Date Scheduled To </strong></label>
                                                    <input
                                                        id="date_scheduled_to"
                                                        type="date"
                                                        className="form-control"
                                                        value={taskDetails.date_scheduled_to}
                                                        readOnly
                                                    />
                                                </div>
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
                                                        /><label for="ct_checkbox_cbx" className="ct_checkbox_cbx"></label></div><p className="mb-0"><strong>Is Recurring</strong></p></div>
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

export default BoatTracker;