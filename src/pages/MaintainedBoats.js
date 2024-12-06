import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { pageRoutes } from '../routes/PageRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBoatTask } from '../redux/actions/maintainedBoatsActions';
import Loader from '../components/Loader';
import { pipViewDate } from '../auth/Pip';
import ReactPagination from '../layout/ReactPagination';
import PaginationDropdown from '../layout/PaginationDropdown';

const MaintainedBoats = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [isToggle, setIsToggle] = useState(false);
    const { isLoading2, boatTaskData } = useSelector((state) => state?.maintainedReducer);
    const [currentPage, setCurrentPage] = useState(0);
    const [usersPerPage, setUserPerPages] = useState(5);

    const displayUsers = boatTaskData?.slice(
        currentPage * usersPerPage,
        (currentPage + 1) * usersPerPage
    );

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    useEffect(() => {
        dispatch(getAllBoatTask())
    }, []);


    if (isLoading2) {
        return <Loader />
    }
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="maintenance-boat" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-item-center gap-3">
                            <a href="javascript:void(0)" onClick={() => navigate(-1)} className="ct_fs_18 ct_fw_700 text-dark ct_ff_roboto"><i className="fa-solid fa-arrow-left-long"></i> Back</a>
                            <h4 className="mb-0 ct_fs_24 ct_fw_600">Maintained Boats</h4>
                        </div>
                        <div className="table-responsive mt-3">
                            <table className="table ct_project_table ct_custom_table_main">
                                <thead>
                                    <tr>
                                        <th>S.No.</th>
                                        <th className="ct_ff_roboto">Boat Registration</th>
                                        <th className="ct_ff_roboto">Owner's Name</th>
                                        <th className="ct_ff_roboto">Email</th>
                                        <th className="ct_ff_roboto">Contact No.</th>
                                        <th className="ct_ff_roboto">Last Serviced</th>
                                    </tr>
                                </thead>
                                {displayUsers?.length != 0 ?
                                    <tbody>
                                        {displayUsers?.length != 0 && displayUsers?.map((item, i) => (
                                            <tr className="ct_pointer_curser" onClick={() => navigate(pageRoutes.boat_tracer, { state: { data: item } })}>
                                                <td>{i + 1}</td>
                                                <td>{`${(item?.rego ?? '')} - ${(item?.name ?? '')}`}</td>
                                                <td>{item?.owners_name ?? ''}</td>
                                                <td>{item?.email ?? ''}</td>
                                                <td>{item?.phone_no ?? ''}</td>
                                                <td className='text-end'>{item?.lastServiceDate ? pipViewDate(item?.lastServiceDate) : 'OnGoing'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    :
                                    <tfoot>
                                        <tr>
                                            <td className="text-center bg-transparent border-0" colSpan="7">
                                                <div className="text-center">
                                                    <p className="mb-0 mt-3 ct_fs_16 ct_fw_600 ct_ff_poppin ct_clr_8C98A9 text-center">Maintained boats not found</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                }
                            </table>
                        </div>
                        <div className="mt-3">
                            {boatTaskData?.length >= 5 &&
                                boatTaskData?.length > 0 && <div className="d-flex align-items-center flex-wrap justify-content-between gap-3 mb-3">
                                    <PaginationDropdown
                                        onChange={(val) => {
                                            setUserPerPages(val);
                                            setCurrentPage(0);
                                        }}
                                    />
                                    <ReactPagination
                                        pageCount={Math.ceil(
                                            boatTaskData.length / usersPerPage
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

export default MaintainedBoats;