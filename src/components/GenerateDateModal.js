import React from 'react';

const GenerateDateModal = ({ onCancel, data, handleChange, handleComplete }) => {
    return (
        <div className="modal show d-block ct_congratulation_modal_fade" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content border-0">
                    <div className="modal-body text-center">
                        <h4 className="modal-title mb-3 ct_fs_24 ct_fw_700 ct_blue_text">
                            Select Due Date
                        </h4>
                        <div className='mb-2 w-100'>
                            <input
                                className="form-control ct_flex_1 ct_input"
                                type="date"
                                onKeyDown={(e) => e.preventDefault()}
                                min={new Date()?.toISOString()?.split("T")[0]}
                                value={data}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='modal-footer justify-content-center border-0'>
                            <button
                                style={{ marginRight: '10px' }}
                                type="button"
                                className="ct_outline_btn ct_outline_orange ml-4"
                                onClick={onCancel}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit"
                                onClick={handleComplete}
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
export default GenerateDateModal;