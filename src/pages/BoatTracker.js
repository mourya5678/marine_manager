import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { pipViewDate4 } from '../auth/Pip';
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from 'react-redux';
import { getAllTaskByID } from '../redux/actions/maintainedBoatsActions';
import Loader from '../components/Loader';
import ReactPagination from '../layout/ReactPagination';
import PaginationDropdown from '../layout/PaginationDropdown';

const BoatTracker = () => {
    const navigate = useNavigate();
    const { state } = useLocation()
    const [isToggle, setIsToggle] = useState(false);
    const { isLoading1, allTasks_by_id } = useSelector((state) => state?.maintainedReducer);
    const dispatch = useDispatch()
    const [isShow, setIsShow] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [usersPerPage, setUserPerPages] = useState(5);

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
    const [series, setSeries] = useState();

    const options = {
        chart: {
            height: 350,
            type: 'rangeBar'
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
        dispatch(getAllTaskByID({ payload: state?.data?.id }))
    }, []);

    useEffect(() => {
        if (allTasks_by_id?.length != 0) {
            setIsShow(false)
            let data12 = [];
            allTasks_by_id.map((item, i) => (
                data12?.push({
                    x: `${item?.boat?.rego} ${i + 1}`,
                    y: [new Date(new Date(item?.date_scheduled_from)).getTime(),
                    new Date(new Date(item?.date_scheduled_to).setHours(23, 59, 59, 999)).getTime()
                    ]
                })
            ))
            setSeries([{
                data: data12
            }]);
            setIsShow(true)
        }
    }, [allTasks_by_id])

    if (isLoading1) {
        return <Loader />
    }
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
                                        <th className="ct_ff_roboto">Boat registration</th>
                                        <th className="ct_ff_roboto">Supplier</th>
                                        <th className="ct_ff_roboto">Date Scheduled</th>
                                        <th className="ct_ff_roboto">User Allocated</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        displayUsers?.length != 0 && displayUsers?.map((item, i) => (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{item?.description ?? ''}</td>
                                                <td>{item?.boat?.rego ?? ''}</td>
                                                <td>{item?.supplier?.company_name ?? ''}</td>
                                                <td className="ct_fw_600">{`${pipViewDate4(item?.date_scheduled_from)} - ${pipViewDate4(item?.date_scheduled_to)}`}</td>
                                                <td className="text-end ct_fw_600">{item?.staff?.full_name ?? ''}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
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
                            {options && isShow == true &&
                                <Chart options={options} series={series} type="rangeBar" height={350} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BoatTracker;