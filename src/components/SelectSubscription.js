import React, { useState } from 'react';
import { message as toast } from "antd";

const SelectSubscription = ({ onClick, handleCancel, subscriptionType, subscriptionPlane }) => {
    const [planType, setPlanType] = useState(subscriptionType);

    const handleSubmit = () => {
        if (planType) {
            onClick(planType);
        } else {
            toast.error("Please select subscription type");
        }
    };

    return (
        <div className="modal show d-block ct_congratulation_modal_fade modal-lg" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content border-0">
                    <div className="modal-body text-center">
                        <h4 className="modal-title mb-4 ct_fs_24 ct_fw_700 ct_blue_text">
                            Subscription
                        </h4>
                        <div className="row ct_subscription_scroll">
                            {subscriptionPlane && subscriptionPlane?.map((item) => (
                                <div className="col-xl-6 col-lg-6 mb-4" onClick={() => {
                                    setPlanType(item?.stripePriceId)
                                }}>
                                    <div className={`ct_price_card_34 ${planType == item?.stripePriceId && 'active'}`}>
                                        <h4 style={{ textTransform: 'capitalize' }}>{item?.billingCycle ?? ''}</h4>
                                        <ul className="ct_px_18">
                                            <li className="d-flex align-items-center gap-2"> <i class="fa-solid fa-check"></i><span style={{ textTransform: 'capitalize' }}>{item?.billingCycle ?? ''}</span></li>
                                            <li className="d-flex align-items-center gap-2"><i class="fa-solid fa-check"></i><span>${item?.price ?? 0}/month (1 user)</span></li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                            {/* <div className="col-xl-6 col-lg-6 mb-4" onClick={() => {
                                setPlanType({
                                    plan_type: "Monthly",
                                    price: "$498",
                                    user: 5
                                })
                                setPlan("monthly5")
                            }}>
                                <div className={`ct_price_card_34 ${plan == "monthly5" && 'active'}`}>
                                    <h4>Monthly</h4>
                                    <ul className="ct_px_18">
                                        <li className="d-flex align-items-center gap-2"> <i class="fa-solid fa-check"></i><span>Monthly</span></li>
                                        <li className="d-flex align-items-center gap-2"><i class="fa-solid fa-check"></i><span>$498/month (2-5 user)</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 mb-2" onClick={() => {
                                setPlanType({
                                    plan_type: "Yearly",
                                    price: "$1980",
                                    user: 1
                                })
                                setPlan("yearly1")
                            }}>
                                <div className={`ct_price_card_34 ${plan == "yearly1" && 'active'}`}>
                                    <h4>Yearly</h4>
                                    <ul className="ct_px_18">
                                        <li className="d-flex align-items-center gap-2"> <i class="fa-solid fa-check"></i><span>Yearly</span></li>
                                        <li className="d-flex align-items-center gap-2"><i class="fa-solid fa-check"></i><span>$1980/yearly (1 user)</span></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 mb-4" onClick={() => {
                                setPlanType({
                                    plan_type: "Yearly",
                                    price: "$2,376",
                                    user: 5
                                })
                                setPlan("yearly5")
                            }}>
                                <div className={`ct_price_card_34 ${plan == "yearly5" && 'active'}`}>
                                    <h4>Yearly</h4>
                                    <ul className="ct_px_18">
                                        <li className="d-flex align-items-center gap-2"><i class="fa-solid fa-check"></i><span>Yearly</span></li>
                                        <li className="d-flex align-items-center gap-2"><i class="fa-solid fa-check"></i><span>$2,376/yearly (2-5 users)</span></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
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
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SelectSubscription;