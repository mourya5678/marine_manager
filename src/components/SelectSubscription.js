import React, { useState } from 'react';
import { message as toast } from "antd";

const SelectSubscription = ({ onClick, handleCancel, subscriptionType, subscriptionPlane, handleContactButton }) => {
    const [planType, setPlanType] = useState(subscriptionType);

    const handleSubmit = () => {
        if (planType) {
            onClick(planType);
        } else {
            toast.error("Please select subscription type");
        };
    };

    const handleUpgradePlan = () => {
        handleContactButton();
    };

    return (
        <div className="modal show d-block ct_congratulation_modal_fade modal-lg" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content border-0">
                    <div className="modal-body pt-4 text-center">
                        <h4 className="modal-title mb-2 ct_fs_24 ct_fw_700 ct_blue_text">
                            Subscription
                        </h4>
                        <div className="row ct_subscription_scroll">
                            {subscriptionPlane && subscriptionPlane?.length != 0 ? subscriptionPlane?.map((item) => (
                                <div className="col-xl-6 col-lg-6 mb-4" onClick={() => {
                                    setPlanType(item?.id)
                                }}>
                                    <div className={`ct_price_card_34 ${planType == item?.id && 'active'}`}>
                                        <h4 style={{ textTransform: 'capitalize' }}>{item?.billingCycle ?? ''}</h4>
                                        <ul className="ct_px_18">
                                            <li className="d-flex align-items-center gap-2"> <i class="fa-solid fa-check"></i><span style={{ textTransform: 'capitalize' }}>{item?.billingCycle ?? ''}</span></li>
                                            <li className="d-flex align-items-center gap-2"><i class="fa-solid fa-check"></i><span>${item?.price ?? 0}/{item?.billingCycle} ({item?.maxStaffUsers} technician)</span></li>
                                        </ul>
                                    </div>
                                </div>
                            ))
                                : <h6 className='text-center mb-2 ct_fw_500' style={{ fontSize: "18px" }} >Upgradation is not available. Please contact support at ahoy@firstmate.com.au</h6>
                            }
                        </div>
                        {subscriptionPlane?.length != 0 ?
                            <div className='modal-footer justify-content-center border-0'>
                                <button
                                    type="button"
                                    className="ct_outline_btn ct_outline_orange ml-4"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit"
                                    onClick={handleSubmit}
                                >
                                    Continue
                                </button>
                            </div>
                            :
                            <div className='modal-footer justify-content-center border-0'>
                                <button
                                    type="button"
                                    className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit"
                                    onClick={handleUpgradePlan}
                                >
                                    OK
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SelectSubscription;