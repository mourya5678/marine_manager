import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getNotificationData } from '../redux/actions/authActions';
import Loader from '../components/Loader';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import PaginationDropdown from '../layout/PaginationDropdown';
import ReactPagination from '../layout/ReactPagination';

const Notification = () => {
    const dispatch = useDispatch();
    const { isLoading, notificationData } = useSelector((state) => state?.authReducer);
    const [isToggle, setIsToggle] = useState(false);
    const [notificationDetails, setNotificationDetails] = useState();
    const [currentPage, setCurrentPage] = useState(0);
    const [usersPerPage, setUserPerPages] = useState(5);

    const displayUsers = notificationData?.slice(
        currentPage * usersPerPage,
        (currentPage + 1) * usersPerPage
    );

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    useEffect(() => {
        dispatch(getNotificationData());
    }, []);

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    if (isLoading) {
        return <Loader />
    }
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="notification" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="ct_white_bg_1 py-5">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <h4 className="ct_fs_24 text-start ct_fw_700 mb-3">All Notifications</h4>
                            </div>
                            <div className="table-responsive mt-3">
                                <table className="table ct_project_table ct_custom_table_main">
                                    <thead>
                                        <tr>
                                            <th className="border-0">S.No.</th>
                                            <th className="ct_ff_roboto border-0">Message</th>
                                            <th className="ct_ff_roboto border-0">Task Description</th>
                                            <th className="ct_ff_roboto border-0">Staff E-mail Address</th>
                                            <th className="ct_ff_roboto border-0">Action</th>
                                        </tr>
                                    </thead>
                                    {displayUsers?.length != 0 ?
                                        <tbody>
                                            {displayUsers?.map((item, i) => (
                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{item?.content ?? 'NA'}</td>
                                                    <td>{item?.task?.description
                                                        ? `${item?.task?.description?.slice(0, 28)}${item?.task?.description?.length >= 28 ? "..." : ""
                                                        }` : ""}</td>
                                                    <td>{item?.byStaff?.email ?? 'NA'}</td>
                                                    <td className='text-end'><i className="fa-solid fa-eye me-2 ab_pointer" data-bs-toggle="modal" data-bs-target="#ct_view_supplier" onClick={() => setNotificationDetails({
                                                        content: item?.content,
                                                        description: item?.task?.description,
                                                        email: item?.byStaff?.email
                                                    })}></i></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        :
                                        <tfoot>
                                            <tr>
                                                <td className="text-center bg-transparent border-0" colSpan="7">
                                                    <div className="text-center">
                                                        <p className="mb-0 mt-3 ct_fs_18 ct_fw_700 ct_ff_poppin ct_clr_8C98A9 text-center">No staff member found</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    }
                                </table>
                            </div>

                            <div className="mt-3">
                                {notificationData?.length >= 5 &&
                                    notificationData?.length > 0 && <div className="d-flex align-items-center flex-wrap justify-content-between gap-3 mb-3">
                                        <PaginationDropdown
                                            onChange={(val) => {
                                                setUserPerPages(val);
                                                setCurrentPage(0);
                                            }}
                                        />
                                        <ReactPagination
                                            pageCount={Math.ceil(
                                                notificationData.length / usersPerPage
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
            </div>

            <div className="modal fade Committed_Price" id="ct_view_supplier" tabindex="-1" aria-labelledby="ct_view_supplierLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div class="modal-header border-0">
                            <button onClick={() => setNotificationDetails()} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {notificationDetails &&
                            <div className="modal-body px-4 pt-0">
                                <div className="pt-0">
                                    <h4 className="mb-4 text-center"><strong>Notification</strong></h4>
                                    <div className="row mb-3">
                                        <div className="col-md-4 mb-2 mb-md-0">
                                            <p className="mb-0 ct_fw_600" >
                                                Message</p>
                                        </div>
                                        <div className="col-md-8 mb-2 mb-md-0">
                                            <p className="mb-0" style={{ color: "rgb(109, 109, 109)" }}>{notificationDetails?.content ?? ''}</p>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-4 mb-2 mb-md-0">
                                            <p className="mb-0 ct_fw_600">
                                                Task Description	</p>
                                        </div>
                                        <div className="col-md-8 mb-2 mb-md-0">
                                            <p className="mb-0" style={{ color: "rgb(109, 109, 109)" }}>{notificationDetails?.description ?? ''}</p>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-4 mb-2 mb-md-0">
                                            <p className="mb-0 ct_fw_600" >
                                                Staff E-mail Address</p>
                                        </div>
                                        <div className="col-md-8 mb-2 mb-md-0">
                                            <p className="mb-0" style={{ color: "rgb(109, 109, 109)" }}>{notificationDetails?.email ?? ''}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification