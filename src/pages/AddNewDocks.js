import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { AddDockSchema } from '../auth/Schema';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { addDockDetails, getBoatData } from '../redux/actions/staffActions';
import { pageRoutes } from '../routes/PageRoutes';

const AddNewDocks = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, all_boats } = useSelector((state) => state?.staffReducer);
    const [isToggle, setIsToggle] = useState(false);

    const initialState = {
        name: '',
        email: '',
        boatId: '',
        address: '',
        book_to: '',
        phone_no: '',
        book_from: '',
        booking_cost: '',
        booking_cost_per_day: '',
    };

    useEffect(() => {
        dispatch(getBoatData());
    }, []);

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    const onHandleAddDocks = async (values, { setSubmitting }) => {
        setSubmitting(false);
        const callback = (response) => {
            // if (response.success) dispatch(getStaffData());
        };
        // dispatch(addDockDetails({ payload: values, callback }));
    };

    if (isLoading) {
        return "Loading..."
    }
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="add-docks" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="ct_white_bg_1 pb-5">
                            <h4 className="ct_fs_24 text-start ct_fw_700 mb-3">Add New Dock</h4>
                            <Formik
                                initialValues={initialState}
                                validationSchema={AddDockSchema}
                                onSubmit={(values, actions) => {
                                    onHandleAddDocks(values, actions);
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                }) => (
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Dock Name</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1">
                                                        <strong>Choose Boat For This Dock</strong>
                                                        <span className="ct_required_star">*</span>
                                                    </label>
                                                    <select className="form-control">
                                                        <option value="">---Select Boat---</option>
                                                        {all_boats && all_boats?.map((item) => (
                                                            <option value="">Breeze{console.log({ item })}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Enter Storage Address</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Email</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <input type="email" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Contact No.</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Enter Booking Cost/day</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <div className="position-relative">
                                                        <input type="number" className="form-control ct_text_indent_15" />
                                                        <span className="ct_dollar_sign">$</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Enter Booking Cost</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <div className="position-relative">
                                                        <input type="number" className="form-control ct_text_indent_15" />
                                                        <span className="ct_dollar_sign">$</span>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Book From</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <input type="date" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Book To</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <input type="date" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-3 mt-4 ct_flex_wrap_575">
                                            <button type="button" className="ct_outline_btn ct_outline_orange w-100" onClick={() => navigate(pageRoutes.boat_docks)}>Cancel</button>
                                            <button type="button" className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit w-100" onClick={() => navigate(pageRoutes.boat_docks)}>Save and add to Docks</button>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewDocks;