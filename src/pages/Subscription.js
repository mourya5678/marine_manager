import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cancelSubscriptionPlan, getAllSubscriptionPlan, getUserSubscriptionPlan } from '../redux/actions/authActions';
import Loader from '../components/Loader';
import { pipViewDate } from '../auth/Pip';
import { message } from 'antd';

const Subscription = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [isToggle, setIsToggle] = useState(false);
    const { isLoading, userSubscriptionPlane, subscriptionPlane } = useSelector((state) => state?.authReducer);


    useEffect(() => {
        dispatch(getUserSubscriptionPlan());
    }, []);

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    const onHandleCancelSubscription = (val) => {
        if (val != 3) {
            const callback = (response) => {
                if (response.success) dispatch(getUserSubscriptionPlan());
            };
            dispatch(cancelSubscriptionPlan({ callback }));
        };
    };

    const handleUpgradeSubscription = () => {
        if (userSubscriptionPlane[0]?.trial_end_date) {
            message.error("You can upgrade the plan after trail end.")
        }
        else {
            dispatch(getAllSubscriptionPlan());
            console.log(userSubscriptionPlane[0]?.trial_end_date);
        }
    };

    if (isLoading) {
        return <Loader />
    };
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="subscription" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 ct_flex_wrap_767">
                            <ul className="d-flex align-items-center gap-3 ">
                                <li className="ct_fs_24 ct_fw_700 ct_list_style_none">Subscription</li>
                            </ul>
                            <div className="d-flex align-items-center gap-4 ct_flex_wrap_767 ct_wrap_100_1_main">
                                <a href="javascript:void(0)" onClick={handleUpgradeSubscription} className="ct_custom_btm ct_wrap_100_1 ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22">Upgrade Plan</a>
                            </div>
                        </div>
                        <div className="table-responsive mt-3">
                            <table className="table ct_project_table ct_custom_table_main">
                                <thead>
                                    <tr>
                                        <th className="border-0">S.No.</th>
                                        <th className="ct_ff_roboto border-0">Plan</th>
                                        <th className="ct_ff_roboto border-0">Plan Type</th>
                                        <th className="ct_ff_roboto border-0">Price</th>
                                        <th className="ct_ff_roboto border-0">Start Date</th>
                                        <th className="ct_ff_roboto border-0">End Date</th>
                                        <th className="ct_ff_roboto border-0">Payment Status</th>
                                        <th className="ct_ff_roboto border-0">Plan Status</th>
                                        <th className="ct_ff_roboto border-0">Action</th>
                                    </tr>
                                </thead>
                                {userSubscriptionPlane?.length != 0 ?
                                    <tbody>
                                        {userSubscriptionPlane?.map((item, i) => (
                                            <tr>
                                                {/* 1 = Active, 3 = Canceled, -1 = Trial, 0=payment failed */}
                                                <td>{i + 1}</td>
                                                <td>{item?.plan?.billingCycle ?? ''}</td>
                                                <td>{item?.trial_end_date ? "Trial" : "Paid"}</td>
                                                <td>${item?.plan?.price ?? 0}</td>
                                                <td>{item?.start_date ? pipViewDate(item?.start_date) : "xx-xx-xxxx"}</td>
                                                <td>{item?.trial_end_date ? pipViewDate(item?.trial_end_date) : item?.renewed_at ? pipViewDate(item?.renewed_at) : "xx-xx-xxxx"}</td>
                                                <td>{item?.sub_status == -1 ? "Free" : item?.sub_status == 0 ? "Payment Failed"
                                                    : item?.sub_status == 1 ? "Paid" : item?.sub_status == 3 && "Canceled"}</td>
                                                <td>{item?.sub_status == -1 ? "Active" : item?.sub_status == 0 ? "InActive"
                                                    : item?.sub_status == 1 ? "Active" : item?.sub_status == 3 && "Canceled"}</td>
                                                <td className="text-end ct_action_btns">
                                                    <button
                                                        className="ct_custom_btm et_cancle_btn ct_wrap_100_1 ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ms-auto ct_add_item ct_line_height_22"
                                                        onClick={() => onHandleCancelSubscription(item?.sub_status)}>
                                                        {item?.sub_status == 3 ? "Canceled" : "Cancel"}
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    :
                                    <tfoot>
                                        <tr>
                                            <td className="text-center bg-transparent border-0" colSpan="7">
                                                <div className="text-center">
                                                    <p className="mb-0 mt-3 ct_fs_16 text-center">No subscription plan found</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                }
                            </table>
                        </div>
                        {/* <div className="row mt-5">
                            <div className="row ct_subscription_scroll">
                                {userSubscriptionPlane && userSubscriptionPlane?.map((item) => (
                                    <div className="col-xl-6 col-lg-6 mb-4">
                                        <div className="ct_price_card_34">
                                            <h4 style={{ textTransform: 'capitalize' }}>{item?.plan?.billingCycle ?? ''}</h4>
                                            <ul className="ct_px_18">
                                                <li className="d-flex align-items-center gap-2"> <i class="fa-solid fa-check"></i><span style={{ textTransform: 'capitalize' }}>{item?.plan?.billingCycle ?? ''}</span></li>
                                                <li className="d-flex align-items-center gap-2"><i class="fa-solid fa-check"></i><span>${item?.plan?.price ?? 0}/month ({item?.plan?.maxStaffUsers} user)</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Subscription;