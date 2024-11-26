import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { pageRoutes } from '../routes/PageRoutes';
import { getAllTaskByID } from '../redux/actions/maintainedBoatsActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { pipViewDate } from '../auth/Pip';

const TaskDescription = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { state } = useLocation();
    const [isToggle, setIsToggle] = useState(false);
    const { isLoading1, allTasks_by_id } = useSelector((state) => state?.maintainedReducer);


    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    useEffect(() => {
        dispatch(getAllTaskByID({ payload: state?.data?.id }))
    }, []);

    console.log(state?.data)
    if (isLoading1) {
        return <Loader />
    }
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="trackersss" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="ct_white_bg_1 pb-5">
                            <div className="d-flex  gap-3 mb-3">
                                <a href="javascription:void(0)" onClick={() => navigate(-1)} className="text-dark"><i className="fa-solid fa-arrow-left"></i></a>
                                <div>
                                    <h4 className="ct_fs_24 text-start ct_fw_700 mb-1 ">Complete Maintenance Details</h4>
                                    <p className="mb-0 ct_ff_roboto ct_text_op_5 ct_fw_500">{state?.data?.rego ?? ''}</p>
                                </div>
                            </div>
                            <form>
                                <div className="ct_purchase_form mt-4">
                                    <div className="ct_multiple_purchase_line">
                                        <table className="table">
                                            {allTasks_by_id?.length != 0 &&
                                                allTasks_by_id?.map((item, i) => (
                                                    item?.status == 1 &&
                                                    <tr>
                                                        <td className="px-2">
                                                            <div className="form-group">
                                                                <label for="" className="mb-2 ct_fw_600">Task Description <span className="ct_required_star">*</span></label>
                                                                <input type="text" value={item?.description ?? ''} className="form-control" disabled />
                                                            </div>
                                                        </td>
                                                        <td className="px-2">
                                                            <div className="form-group">
                                                                <label for="" className="mb-2 ct_fw_600">Date Completed <span className="ct_required_star">*</span></label>
                                                                <input type="text" className="form-control" value={pipViewDate(item?.completed_at)} disabled />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </table>
                                    </div>
                                    {/* <div className="text-end">
                                        <button className="ct_outline_orange ct_custom_btm ct_outline_btn text-center  "><strong>+ Add Line</strong></button>
                                    </div> */}
                                    {/* <div className="col-md-12 mt-4">
                                        <div className="form-group mb-3">
                                            <label for="ct_file_upload2" className="ct_file_upload_big">
                                                <input
                                                    type="file"
                                                    id="ct_file_upload2"
                                                    className="d-none"
                                                />
                                                <span
                                                >
                                                    <h5 className="ct_fs_14 ct_fw_700">Drag photos here</h5>
                                                    <p className="ct_fs_14 mb-0">Max upload file 10 MB</p>
                                                </span>
                                            </label>
                                        </div>
                                    </div> */}
                                    <div className="d-flex align-items-center gap-3 mt-5 ct_flex_wrap_575">
                                        <button type="button" onClick={() => navigate(pageRoutes.all_boats)} className="ct_outline_btn ct_outline_orange w-100">Cancel</button>
                                        <button type="button"
                                            // onClick={() => navigate(pageRoutes.all_boats)}
                                            className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit w-100">Save and Push to First Mate App</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default TaskDescription;