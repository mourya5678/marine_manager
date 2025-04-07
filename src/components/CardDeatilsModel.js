import React from 'react';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CardDeatilsModel = ({ onCancel, onClick }) => {
    const stripe = useStripe();
    const elements = useElements();

    const onHandleSubmitCardDetails = async () => {
        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });
        onClick(paymentMethod, error);
    };

    return (
        <div className="modal show d-block ct_congratulation_modal_fade modal-md" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content border-0">
                    <div className="modal-body text-center">
                        <h4 className="modal-title mb-4 ct_fs_24 ct_fw_700 ct_blue_text">
                            Enter Card Details
                        </h4>
                        <div className='et_marrine_card mb-2'>
                            <CardElement />
                        </div>
                        <div className='modal-footer justify-content-center border-0'>
                            <button
                                type="button"
                                className="ct_outline_btn ct_outline_orange ml-4"
                                onClick={onCancel}
                            >
                                Back
                            </button>
                            <button
                                type="button"
                                className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit"
                                onClick={onHandleSubmitCardDetails}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CardDeatilsModel;