import React, { useEffect, useState } from "react";
import { message as toast } from "antd";

const SelectSubscription = ({
  onClick,
  handleCancel,
  subscriptionPlane,
}) => {

  const [planTypeSubscription, setPlanTypeSubscription] = useState([]);

  useEffect(() => {
    let data = [];
    subscriptionPlane?.map((item) => (
      item?.billingCycle == "Monthly" && data.push(item)
    ));
    setPlanTypeSubscription(data);
  }, []);

  const handleClickYearlyMonthly = (val) => {
    if (val == "Monthly") {
      let data = [];
      subscriptionPlane?.map((item) => (
        item?.billingCycle == "Monthly" && data.push(item)
      ));
      setPlanTypeSubscription(data);
    } else if (val == "Yearly") {
      let data = [];
      subscriptionPlane?.map((item) => (
        item?.billingCycle == "Yearly" && data.push(item)
      ));
      setPlanTypeSubscription(data);
    };
  };

  const handleSubmit = (val) => {
    onClick(val);
  };


  return (
    <div
      className="modal show d-block ct_congratulation_modal_fade modal-lg"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0">
          <div className="modal-body pt-4 text-center et_px_100 pb-5 position-relative">
            <i className="fa fa-close close_btn" onClick={handleCancel}></i>
            <ul
              className="nav nav-pills mb-3 et_tab_subscription"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                  onClick={() => handleClickYearlyMonthly('Monthly')}
                >
                  Monthly
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                  onClick={() => handleClickYearlyMonthly('Yearly')}
                >
                  Yearly
                </button>
              </li>
            </ul>
            <div className="tab-content mt-5" id="pills-tabContent">
              <div
                className="tab-pane fade show active text-start"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className={planTypeSubscription?.length != 0 ? "et_grid_2_50" : ""}>
                  {planTypeSubscription?.length != 0 ?
                    planTypeSubscription?.map((item) => (
                      <div>
                        {/* <span className="et_yellow_badge">TEST MODE</span> */}
                        <div className="et_logo my-4">
                          <img src="img/Logo_blue_new.png" />
                        </div>
                        <h4 className="mb-1 et_fs_22" style={{ maxWidth: '15rem' }}>{item?.name ?? ''}</h4>
                        <p
                          className="mb-0"
                          style={{ color: "#aaa", fontWeight: "400", maxWidth: '15rem', minHeight:'58px'}}
                        >
                          {item?.name ?? ''} 1 Month subscription to First Mate ServiceHub
                        </p>
                        <h2 className="et_fs_28 mb-4">
                          A$ {item?.price ?? 0} <span className="et_small_text"> per month</span>
                        </h2>
                        <button className="et_blue_full_btn" onClick={() => handleSubmit(item)}>Start Trial</button>
                      </div>
                    ))
                    :
                    <>
                      <h6 className='text-center mb-2 ct_fw_500' style={{ fontSize: "18px" }} >
                        Upgradation is not available. Please contact support at ahoy@firstmate.com.au
                      </h6>
                      <div className='modal-footer justify-content-center border-0'>
                        <button
                          type="button"
                          className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit"
                          onClick={handleCancel}
                        >
                          OK
                        </button>
                      </div>
                    </>
                  }
                </div>
              </div>
              <div
                className="tab-pane fade text-start"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className={planTypeSubscription?.length != 0 ? "et_grid_2_50" : ""}>
                  {planTypeSubscription?.length != 0 ?
                    planTypeSubscription?.map((item) => (
                      <div>
                        {/* <span className="et_yellow_badge">TEST MODE</span> */}
                        <div className="et_logo my-4">
                          <img src="img/Logo_blue_new.png" />
                        </div>
                        <h4 className="mb-1 et_fs_22" style={{ maxWidth: '15rem' }}>{item?.name ?? ''}</h4>
                        <p
                          className="mb-0"
                          style={{ color: "#aaa", fontWeight: "400", maxWidth: '15rem', minHeight:'58px' }}
                        >
                          {item?.name ?? ''} 12 Month subscription to First Mate ServiceHub
                        </p>
                        <h2 className="et_fs_28 mb-4">
                          A$ {item?.price ?? 0} <span className="et_small_text"> per year</span>
                        </h2>
                        <button className="et_blue_full_btn" onClick={() => handleSubmit(item)}>Start Trial</button>
                      </div>
                    ))
                    :
                    <>
                      <h6 className='text-center mb-2 ct_fw_500' style={{ fontSize: "18px" }} >
                        Upgradation is not available. Please contact support at ahoy@firstmate.com.au
                      </h6>
                      <div className='modal-footer justify-content-center border-0'>
                        <button
                          type="button"
                          className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit"
                          onClick={handleCancel}
                        >
                          OK
                        </button>
                      </div>
                    </>
                  }
                </div>
              </div>
            </div>
            {/* <h4 className="modal-title mb-2 ct_fs_24 ct_fw_700 ct_blue_text">
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
                                            <li className="d-flex align-items-center gap-2"> <i className="fa-solid fa-check"></i><span style={{ textTransform: 'capitalize' }}>{item?.billingCycle ?? ''}</span></li>
                                            <li className="d-flex align-items-center gap-2"><i className="fa-solid fa-check"></i><span>${item?.price ?? 0}/{item?.billingCycle} ({item?.maxStaffUsers} technician)</span></li>
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
                        } */}
          </div>
        </div>
      </div>
    </div >
  );
};

export default SelectSubscription;
