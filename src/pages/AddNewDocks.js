import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { AddDockSchema } from '../auth/Schema';
import ErrorMessage from '../components/ErrorMessage';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Sidebar from '../components/Sidebar';
import { addDockDetails, getAvailableBoats, getBoatData } from '../redux/actions/staffActions';
import { pageRoutes } from '../routes/PageRoutes';

const AddNewDocks = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading1 } = useSelector((state) => state?.staffReducer);
    const [isToggle, setIsToggle] = useState(false);

    const initialState = {
        name: '',
        email: '',
        address: '',
        phone_no: '',
        booking_cost: '',
        booking_cost_per_day: '',
    };

    useEffect(() => {
        dispatch(getAvailableBoats());
    }, []);

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    const onHandleAddDocks = async (values, { setSubmitting }) => {
        setSubmitting(false);
        const callback = (response) => {
            if (response.success) navigate(pageRoutes.boat_docks);
        };
        const data = {
            name: values?.name.trim(),
            email: values?.email.trim(),
            address: values?.address.trim(),
            book_to: values?.book_to,
            phone_no: values?.phone_no,
            book_from: values?.book_from,
            booking_cost: `${values?.booking_cost}`,
            booking_cost_per_day: `${values?.booking_cost_per_day}`,
        }
        dispatch(addDockDetails({ payload: data, callback }));
    };

    if (isLoading1) {
        return <Loader />
    }
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="add-docks" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="ct_white_bg_1 pb-5">
                            <h4 className="ct_fs_24 text-start ct_fw_700 mb-3">Add Dock</h4>
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
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Dock Name</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <input
                                                        id="name"
                                                        value={values.name}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        touched={touched}
                                                        fieldName="name"
                                                    />
                                                </div>
                                            </div>
                                            {/* <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1">
                                                        <strong>Choose Boat For This Dock</strong>
                                                    </label>
                                                    <select
                                                        className="form-control"
                                                        id="boatId"
                                                        value={values.boatId}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">----Select Boat----</option>
                                                        {available_boats && available_boats?.map((item) => (
                                                            <option value={item.id}>{item.name}</option>
                                                        ))}
                                                    </select>
                                                    <ErrorMessage
                                                        errors={errors}
                                                        touched={touched}
                                                        fieldName="boatId"
                                                    />
                                                </div>
                                            </div> */}
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Storage Address</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <input
                                                        id="address"
                                                        value={values.address}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        touched={touched}
                                                        fieldName="address"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Email</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        value={values.email}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        touched={touched}
                                                        fieldName="email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Contact No.</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="phone_no"
                                                        value={values.phone_no}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        touched={touched}
                                                        fieldName="phone_no"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Enter Booking Cost/Day</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <div className="position-relative">
                                                        <input
                                                            type="number"
                                                            className="form-control ct_text_indent_15"
                                                            onWheel={() => document.activeElement.blur()}
                                                            id="booking_cost_per_day"
                                                            value={values.booking_cost_per_day}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                        />
                                                        <span className="ct_dollar_sign">$</span>
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="booking_cost_per_day"
                                                        />
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
                                                        <input
                                                            type="number"
                                                            className="form-control ct_text_indent_15"
                                                            onWheel={() => document.activeElement.blur()}
                                                            id="booking_cost"
                                                            value={values.booking_cost}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                        />
                                                        <span className="ct_dollar_sign">$</span>
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="booking_cost"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Book From</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        onKeyDown={(e) => e.preventDefault()}
                                                        min={new Date()?.toISOString()?.split("T")[0]}
                                                        id="book_from"
                                                        value={values.book_from}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        touched={touched}
                                                        fieldName="book_from"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"
                                                    ><strong>Book To</strong>
                                                        <span className="ct_required_star">*</span></label
                                                    >
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        onKeyDown={(e) => e.preventDefault()}
                                                        min={new Date()?.toISOString()?.split("T")[0]}
                                                        id="book_to"
                                                        value={values.book_to}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        touched={touched}
                                                        fieldName="book_to"
                                                    />
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="d-flex align-items-center gap-3 mt-4 ct_flex_wrap_575">
                                            <button type="button" className="ct_outline_btn ct_outline_orange w-100" onClick={() => navigate(pageRoutes.boat_docks)}>Cancel</button>
                                            <button type="button"
                                                className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit w-100"
                                                onClick={handleSubmit}
                                            >Save and add Dock</button>
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