import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { pageRoutes } from '../routes/PageRoutes';
import GenerateDateModal from '../components/GenerateDateModal';
import { message } from 'antd';
import { createBoatInvoice, getCompletedBoatTask } from '../redux/actions/maintainedBoatsActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';

const TaskReview = () => {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = useState(false);
    const dispatch = useDispatch();
    const { isLoading2, completedBoatTask } = useSelector(
        (state) => state?.maintainedReducer
    );
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectDate, setSelectDate] = useState('');
    const { state } = useLocation();
    console.log(completedBoatTask, { completedBoatTask });

    useEffect(() => {
        dispatch(getCompletedBoatTask({ payload: state?.boat_id }));
    }, []);

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    const handleGenrateInvoiceDate = () => {
        if (selectDate != '') {
            const callback = (response) => {
                if (response.success) {
                    // dispatch(getGeneratedInvoiceData({ payload: response?.data?.invoiceId }));
                    navigate(pageRoutes.invoice, { state: { invoice_id: response?.data?.invoiceId, due_date: selectDate, boat_id: state?.boat_id } })
                }
            };
            dispatch(createBoatInvoice({ payload: { boatId: state?.boat_id, pleasePayByDate: selectDate }, callback }));
        } else {
            message.error('Please select date');
        }
    };

    const handleNextPhase = () => {
        setIsModalVisible(true)
    };

    if (isLoading2) {
        return <Loader />;
    };
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="task-review" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-items-center justify-content-between">
                            <h4 className="mb-0 ct_fs_24 ct_fw_600">Task Review</h4>
                            <div className="">
                                {completedBoatTask?.length != 0 ?
                                    <a href="javascript:void(0)" className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22" onClick={handleNextPhase}>
                                        Next
                                    </a>
                                    :
                                    <a href="javascript:void(0)" className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22" onClick={() => navigate(-1)}>
                                        Back
                                    </a>
                                }
                            </div>
                        </div>
                        <div className="table-responsive mt-3">
                            <table className="table ct_project_table ct_custom_table_main">
                                <thead>
                                    <tr>
                                        <th>S.No.</th>
                                        <th className="ct_ff_roboto">Maintenance Item Description</th>
                                        <th className="ct_ff_roboto">Status</th>
                                        <th className="ct_ff_roboto">Quoted Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {completedBoatTask?.length != 0 &&
                                        completedBoatTask?.map((item, i) => (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td style={{ wordBreak: "break-word", whiteSpace: "normal" }}>{item?.description ?? ''}</td>
                                                <td className="ct_fw_600">Completed</td>
                                                <td className="text-end">$ {item?.quoted_value ?? 0}</td>
                                            </tr>
                                        ))}
                                    {/* <tr>
                                        <td>2</td>
                                        <td>Full antifoul of hull</td>
                                        <td>Completed</td>
                                        <td className="text-end">$ 300</td>
                                        </tr>
                                        <tr>
                                        <td>3</td>
                                        <td>Full antifoul of hull</td>
                                        <td>Completed</td>
                                        <td className="text-end">$ 300</td>
                                        </tr>
                                        <tr>
                                        <td>4</td>
                                        <td>Full antifoul of hull</td>
                                        <td>Completed</td>
                                        <td className="text-end">$ 300</td>
                                        </tr> */}
                                </tbody>
                                {completedBoatTask?.length == 0 &&
                                    <tfoot>
                                        <tr>
                                            <td
                                                className="text-center bg-transparent border-0"
                                                colSpan="7"
                                            >
                                                <div className="text-center">
                                                    <p className="mb-0 mt-3 ct_fs_16 text-center">
                                                        No task found
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {isModalVisible &&
                <GenerateDateModal
                    onCancel={() => {
                        setIsModalVisible(false);
                        setSelectDate('');
                    }}
                    data={selectDate}
                    handleChange={(e) => setSelectDate(e.target.value)}
                    handleComplete={handleGenrateInvoiceDate}
                />
            }
        </div >
    )
}

export default TaskReview;