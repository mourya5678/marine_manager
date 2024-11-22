import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { pageRoutes } from '../routes/PageRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBoatTask } from '../redux/actions/maintainedBoatsActions';
import Loader from '../components/Loader';
import { pipViewDate } from '../auth/Pip';

const MaintainedBoats = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [isToggle, setIsToggle] = useState(false);
    const { isLoading1, boatTaskData } = useSelector((state) => state?.maintainedReducer);
    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    useEffect(() => {
        dispatch(getAllBoatTask())
    }, []);


    if (isLoading1) {
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
                                        <th className="ct_ff_roboto">Boat Registration No.</th>
                                        <th className="ct_ff_roboto">Last Serviced</th>
                                        <th className="ct_ff_roboto">Owners Name</th>
                                        <th className="ct_ff_roboto">Email</th>
                                        <th className="ct_ff_roboto">Contact No.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {console.log({ boatTaskData }, 'boatTaskData')}
                                    {boatTaskData?.length != 0 && boatTaskData?.map((item, i) => (
                                        <tr onClick={() => navigate(pageRoutes.boat_tracer, { state: { data: item } })}>
                                            <td>{i + 1}</td>
                                            <td>{item?.rego ?? ''}</td>
                                            <td>{item?.lastServiceDate ? pipViewDate(item?.lastServiceDate) : ''}</td>
                                            <td>{item?.owners_name ?? ''}</td>
                                            <td className="ct_fw_600">{item?.email ?? ''}</td>
                                            <td className="text-end ct_fw_600">{item?.phone_no ?? ''}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MaintainedBoats;