import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { pipViewDate4 } from '../auth/Pip';
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from 'react-redux';
import { getAllTaskByID } from '../redux/actions/maintainedBoatsActions';
import Loader from '../components/Loader';

const BoatTracker = () => {
    const navigate = useNavigate();
    const { state } = useLocation()
    const [isToggle, setIsToggle] = useState(false);
    const { isLoading1, allTasks_by_id } = useSelector((state) => state?.maintainedReducer);

    const dispatch = useDispatch()
    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };
    const [series, setSeries] = useState([]);

    const options = {
        chart: {
            type: "rangeBar",
            height: 500,
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: "15px",
            },
        },
        xaxis: {
            type: "datetime",
            labels: {
                format: "dd-MM-yyyy",
            },
            title: {
                text: "Date",
            },
        },
        yaxis: {
            title: {
                text: "Tasks",
            },
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: (val) => val,
            },
            x: {
                format: "dd-MM-yyyy",
            },
        },
        dataLabels: {
            enabled: true,
            formatter: (val) => `${new Date(val[0]).toLocaleDateString()} - ${new Date(val[1]).toLocaleDateString()}`,
        },
        grid: {
            borderColor: "#f1f1f1",
        },
    };

    useEffect(() => {
        dispatch(getAllTaskByID({ payload: state?.data?.id }))
    }, []);

    useEffect(() => {
        let data12 = [];
        state?.data?.Task.map((item) => (
            data12?.push({
                name: `${item?.id}`,
                data: [{ x: `${item?.id}`, y: [new Date("2024-08-01").getTime(), new Date("2024-08-05").getTime()] }]
            })
        ))
        setSeries(data12);
    }, [])

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
                                        allTasks_by_id?.length != 0 && allTasks_by_id?.map((item, i) => (
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
                        <div className="ct_white_bg_1">
                            {series &&
                                <Chart options={options} series={series} type="rangeBar" height={500} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BoatTracker;