import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getAllInvoicedData } from '../redux/actions/staffActions';
import Loader from '../components/Loader';
import ReactPagination from '../layout/ReactPagination';
import PaginationDropdown from '../layout/PaginationDropdown';
import { pipViewDate, pipViewDate4 } from '../auth/Pip';
import { useNavigate } from 'react-router-dom';
import { pageRoutes } from '../routes/PageRoutes';

const AllInvoices = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading1, all_invoice } = useSelector((state) => state?.staffReducer);
    const [isToggle, setIsToggle] = useState(false);

    const [currentPage, setCurrentPage] = useState(0);
    const [usersPerPage, setUserPerPages] = useState(5);


    useEffect(() => {
        dispatch(getAllInvoicedData());
    }, []);

    const displayUsers = all_invoice.length != 0 ? all_invoice?.slice(
        currentPage * usersPerPage,
        (currentPage + 1) * usersPerPage
    ) : [];

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    if (isLoading1) {
        return <Loader />;
    };
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="all-invoicee" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="">
                            <div className="d-flex align-items-center justify-content-between ct_flex_wrap_767 gap-3 ">
                                <h4 className="mb-0 ct_fs_22">All Invoices</h4>
                            </div>
                        </div>
                        <div className="table-responsive mt-3">
                            <table className="table ct_project_table ct_custom_table_main">
                                <thead>
                                    <tr>
                                        <th>S.No.</th>
                                        <th>Invoice Number</th>
                                        <th>Boat Owner's Name </th>
                                        <th>Boat Owner's Email </th>
                                        <th>Invoice Date</th>
                                        {/* <th>Contact No.</th>
                                        <th>City</th> */}
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                {displayUsers?.length != 0 ?
                                    <tbody>
                                        {displayUsers?.map((item, i) => (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{item?.invoiceNumber ?? 'NA'}</td>
                                                <td>{item?.boat?.owners_name ?? 'NA'}</td>
                                                <td>{item?.boat?.email ?? 'NA'}</td>
                                                <td>{item?.boat?.createdAt ? pipViewDate(item?.boat?.createdAt) : 'NA'}</td>
                                                <td className="text-end ct_action_btns" >
                                                    <i className="fa-solid fa-eye me-2 ab_pointer" onClick={() => navigate(pageRoutes?.invoice_detail, { state: { invoice_id: item?.id } })}></i>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    :
                                    <tfoot>
                                        <tr>
                                            <td className="text-center bg-transparent border-0" colSpan="7">
                                                <div className="text-center">
                                                    <p className="mb-0 mt-3 text-center">No invoice found</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                }
                            </table>
                        </div>
                        <div className="mt-3">
                            {all_invoice?.length >= 5 &&
                                all_invoice?.length > 0 && <div className="d-flex align-items-center flex-wrap justify-content-between gap-3 mb-3">
                                    <PaginationDropdown
                                        onChange={(val) => {
                                            setUserPerPages(val);
                                            setCurrentPage(0);
                                        }}
                                    />
                                    <ReactPagination
                                        pageCount={Math.ceil(
                                            all_invoice.length / usersPerPage
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
    )
}

export default AllInvoices;