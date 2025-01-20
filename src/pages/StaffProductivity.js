import React, { useState } from 'react';
import { useLocation } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import PaginationDropdown from '../layout/PaginationDropdown';
import ReactPagination from '../layout/ReactPagination';
import { pipViewDate4 } from '../auth/Pip';

const StaffProductivity = () => {
    const { state } = useLocation();
    const [isToggle, setIsToggle] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [usersPerPage, setUserPerPages] = useState(5);
    const [taskDetails, setTaskDetails] = useState();
    const [searchValue, setSearchValue] = useState('');

    const displayUsers = state?.data
        .filter((item) => {
            return item?.staff?.full_name
                ?.toLowerCase()
                ?.includes(searchValue?.toLowerCase())
        })
        .slice(
            currentPage * usersPerPage,
            (currentPage + 1) * usersPerPage
        );

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="staff-maintenance" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-items-center gap-3 justify-content-between flex-wrap">
                            <h4 className="mb-0 ct_fs_24 ct_fw_600">Staff Productivity</h4>
                            <div className="position-relative ct_search_input">
                                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" className="form-control ct_flex_1 pe-5" placeholder='Search By Staff Name' />
                                <i className="fa-solid fa-magnifying-glass "></i>
                            </div>
                        </div>
                        <div className="table-responsive mt-3">
                            <table className="table ct_project_table ct_custom_table_main">
                                <thead>
                                    <tr>
                                        <th>S.No.</th>
                                        <th className="ct_ff_roboto">Staff Allocated</th>
                                        <th className="ct_ff_roboto">Task Name</th>
                                        <th className="ct_ff_roboto">Consumed Hours</th>
                                        <th className="ct_ff_roboto">Action</th>
                                    </tr>
                                </thead>
                                {displayUsers?.length != 0 ?
                                    <tbody>
                                        {displayUsers?.length != 0 &&
                                            displayUsers?.map((item, i) => (
                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{item?.staff?.full_name ?? ''}</td>
                                                    <td>{item?.description
                                                        ? `${item?.description?.slice(0, 28)}${item?.description?.length >= 28 ? "..." : ""
                                                        }`
                                                        : ""}</td>
                                                    <td>{item?.time_alloted ?? 0} Hours</td>
                                                    <td className='text-end' onClick={() => setTaskDetails(item)}><i className="fa-solid fa-eye me-2 ab_pointer"
                                                        data-bs-toggle="modal" data-bs-target="#ct_view_supplier"
                                                    ></i></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                    :
                                    <tfoot>
                                        <tr>
                                            <td className="text-center bg-transparent border-0" colSpan="7">
                                                <div className="text-center">
                                                    <p className="mb-0 mt-3 ct_fs_14 ct_fw_600 ct_ff_poppin ct_clr_8C98A9 text-center">No task found</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                }
                            </table>
                        </div>
                        <div className="mt-3">
                            {state?.data?.length >= 5 &&
                                state?.data?.length > 0 && <div className="d-flex align-items-center flex-wrap justify-content-between gap-3 mb-3">
                                    <PaginationDropdown
                                        onChange={(val) => {
                                            setUserPerPages(val);
                                            setCurrentPage(0);
                                        }}
                                    />
                                    <ReactPagination
                                        pageCount={Math.ceil(
                                            state?.data?.length / usersPerPage
                                        )}
                                        onPageChange={handlePageClick}
                                        currentPage={currentPage}
                                    />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade Committed_Price" id="ct_view_supplier" tabindex="-1" aria-labelledby="ct_view_supplierLabel"
                data-bs-backdrop='static' data-bs-keyboard="false"
                aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>Task Details</strong></h4>
                                {taskDetails &&
                                    <form>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Assign To</strong></label>
                                                    <input
                                                        value={taskDetails?.assign_to ?? ''}
                                                        type="text"
                                                        className="form-control"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Maintenance Item Description</strong></label>
                                                    <textarea
                                                        value={taskDetails?.description ?? ''}
                                                        type="text"
                                                        className="form-control"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Time Allocated (Hours)</strong></label>
                                                    <input
                                                        type="text"
                                                        value={taskDetails?.time_alloted ?? ''}
                                                        className="form-control"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Quoted Value</strong></label>
                                                    <input
                                                        value={taskDetails?.quoted_value ?? ''}
                                                        type="text"
                                                        className="form-control"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Boat Registration</strong></label>
                                                    <input
                                                        value={taskDetails?.boat?.rego ?? ''}
                                                        type="text"
                                                        className="form-control"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Staff</strong></label>
                                                    <input
                                                        value={taskDetails?.staff?.full_name ?? ''}
                                                        type="text"
                                                        className="form-control"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Date Scheduled From</strong></label>
                                                    <input
                                                        value={taskDetails?.date_scheduled_from ? pipViewDate4(taskDetails?.date_scheduled_from) : ''}
                                                        type="text"
                                                        className="form-control"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Date Scheduled To</strong></label>
                                                    <input
                                                        value={taskDetails?.date_scheduled_to ? pipViewDate4(taskDetails?.date_scheduled_to) : ''}
                                                        type="text"
                                                        className="form-control"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="ct_checkbox_main">
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id="ct_checkbox_cbx"
                                                            className="ct_hidden-xs-up"
                                                            value={taskDetails.isRecurring}
                                                            checked={taskDetails.isRecurring}
                                                            readOnly
                                                        />
                                                        <label
                                                            for="ct_checkbox_cbx"
                                                            className="ct_checkbox_cbx"
                                                        ></label>
                                                    </div>
                                                    <p className="mb-0">Is Recurring</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer justify-content-center border-0">
                                            <button type="button" className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal" onClick={() => setTaskDetails()}>Cancel</button>
                                        </div>
                                    </form>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StaffProductivity;