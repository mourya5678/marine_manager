import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { AddStaffSchema, UpdateStaffSchema } from '../auth/Schema';
import Sidebar from '../components/Sidebar';
import { addStaffDetails, getStaffData, updateStaffDetails } from '../redux/actions/staffActions';
import { Formik } from 'formik';
import ErrorMessage from '../components/ErrorMessage';
import { useNavigate } from 'react-router';
import Eye from '../components/Eye';
import Loader from '../components/Loader';

const CreateStaff = () => {
    const { isLoading, staff_data } = useSelector((state) => state?.staffReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isEye, setIsEye] = useState(false);
    const [isEye1, setIsEye1] = useState(false);
    const [isEye2, setIsEye2] = useState(false);
    const [isToggle, setIsToggle] = useState(false);
    const [staffDetails, setStaffDetails] = useState({});

    const initialState = {
        name: '',
        role: '',
        email: '',
        phone_no: '',
        password: '',
        home_address: ''
    };

    useEffect(() => {
        dispatch(getStaffData());
    }, []);

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    const onHandleAddStaff = async (values, { setSubmitting }) => {
        setSubmitting(false);
        const callback = (response) => {
            if (response.success) dispatch(getStaffData());
        };
        const data = {
            name: values?.name?.trim(),
            role: values?.role?.trim(),
            email: values?.email,
            phone_no: `${values?.phone_no}`,
            password: values?.password,
            home_address: values?.home_address?.trim()
        };
        dispatch(addStaffDetails({ payload: data, callback }));
    };

    const onHandleUpdateStaff = async (values, { setSubmitting }) => {
        setSubmitting(false);
        setStaffDetails();
        const callback = (response) => {
            if (response.success) {
                dispatch(getStaffData());
            }
        };
        const data = {
            id: values?.id,
            name: values?.full_name.trim(),
            role: values?.role.trim(),
            phone_no: values?.phone_no,
            password: values?.password,
            home_address: values?.home_address.trim(),
            status: values?.status == true ? 1 : 0
        };
        dispatch(updateStaffDetails({ payload: data, callback }));
    };


    if (isLoading) {
        return <Loader />
    }
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="create-staff" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="ct_white_bg_1 py-5">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <h4 className="ct_fs_24 text-start ct_fw_700 mb-3">Staff Members</h4>
                                <button className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22 mx-0" data-bs-toggle="modal" data-bs-target="#ct_add_member">Add Member</button>
                            </div>
                            <div className="table-responsive mt-3">
                                <table className="table ct_project_table ct_custom_table_main">
                                    <thead>
                                        <tr>
                                            <th className="border-0">S.no</th>
                                            <th className="ct_ff_roboto border-0">Name</th>
                                            <th className="ct_ff_roboto border-0">Job Role</th>
                                            <th className="ct_ff_roboto border-0">E-mail Address</th>
                                            <th className="ct_ff_roboto border-0">Contact no.</th>
                                            <th className="ct_ff_roboto border-0">Status</th>
                                            <th className="ct_ff_roboto border-0">Action</th>
                                        </tr>
                                    </thead>
                                    {staff_data?.length != 0 ?
                                        <tbody>
                                            {staff_data?.map((item, i) => (
                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{item?.full_name ?? 'NA'}</td>
                                                    <td>{item?.role ?? 'NA'}</td>
                                                    <td>{item?.email ?? 'NA'}</td>
                                                    <td className="ct_fw_600">{item?.phone_no ?? 'NA'}</td>
                                                    <td className=" ct_fw_600 ct_green_text">{item?.status == 1 ? 'Active' : 'Inactive'}</td>
                                                    <td className="text-end ct_action_btns" onClick={() => setStaffDetails({
                                                        id: item?.id,
                                                        full_name: item?.full_name,
                                                        role: item?.role,
                                                        email: item?.email,
                                                        phone_no: item?.phone_no,
                                                        password: item?.showPassword,
                                                        home_address: item?.home_address,
                                                        status: item?.status == 0 ? false : true
                                                    })}>
                                                        <i className="fa-solid fa-eye me-2" data-bs-toggle="modal" data-bs-target="#ct_view_member"></i>
                                                        <i className="fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#ct_update_member"></i>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        :
                                        <tfoot>
                                            <tr>
                                                <td className="text-center bg-transparent border-0" colSpan="7">
                                                    <div className="text-center">
                                                        <p className="mb-0 mt-3 ct_fs_24 ct_fw_400 ct_ff_poppin ct_clr_8C98A9 text-center">No staff member found</p>
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
            </div>
            <div className="modal fade Committed_Price" id="ct_add_member" tabindex="-1" aria-labelledby="ct_add_memberLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>Add Staff Member </strong></h4>
                                <Formik
                                    initialValues={initialState}
                                    validationSchema={AddStaffSchema}
                                    onSubmit={(values, actions) => {
                                        onHandleAddStaff(values, actions);
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
                                                        <label className="mb-1"><strong>Name</strong> <span className="ct_required_star">*</span></label>
                                                        <input
                                                            id="name"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            value={values?.name}
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
                                                <div className="col-md-12">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1"><strong>Job Role</strong> <span className="ct_required_star">*</span></label>
                                                        <select className="form-control"
                                                            id="role"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            value={values?.role}>
                                                            <option value="">Select Job Role</option>
                                                            <option value="Technician">Technician</option>
                                                        </select>
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="role"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1"><strong>Email </strong> <span className="ct_required_star">*</span></label>
                                                        <input
                                                            id="email"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            value={values?.email}
                                                            type="email"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="email"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1"><strong>Password </strong> <span className="ct_required_star">*</span></label>
                                                        <div className="position-relative">
                                                            <input
                                                                id="password"
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                value={values?.password}
                                                                type={isEye2 ? "text" : "password"}
                                                                className="form-control"
                                                            />
                                                            <Eye isEye={isEye2} onClick={() => setIsEye2(!isEye2)} />
                                                        </div>
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="password"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1"><strong>Contact no. </strong> <span className="ct_required_star">*</span></label>
                                                        <input
                                                            id="phone_no"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            value={values?.phone_no}
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="phone_no"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1"><strong>Home Address </strong> <span className="ct_required_star">*</span></label>
                                                        <textarea
                                                            id="home_address"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            value={values?.home_address}
                                                            className="form-control"
                                                            rows="4"
                                                        ></textarea>
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="home_address"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer justify-content-center border-0 ct_flex_wrap_575 gap-2">
                                                <button type="button" className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal" onClick={() => setStaffDetails()}>Cancel</button>
                                                <button type="submit ct_" onClick={handleSubmit} className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit ct_white_space_nowrap" data-bs-dismiss={values?.email != '' && Object?.keys(errors)?.length == 0 && "modal"}>Submit</button>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade Committed_Price" id="ct_update_member" tabindex="-1" aria-labelledby="ct_update_memberLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>Update Staff Detail </strong></h4>
                                {staffDetails?.email &&
                                    <Formik
                                        initialValues={staffDetails}
                                        validationSchema={UpdateStaffSchema}
                                        onSubmit={(values, actions) => {
                                            onHandleUpdateStaff(values, actions);
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
                                                            <label className="mb-1"><strong>Name</strong> <span className="ct_required_star">*</span></label>
                                                            <input
                                                                id="full_name"
                                                                type="text"
                                                                className="form-control"
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                value={values?.full_name}
                                                            />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="full_name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group mb-3">
                                                            <label className="mb-1"><strong>Job Role</strong> <span className="ct_required_star">*</span></label>
                                                            <select className="form-control"
                                                                id="role"
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                value={values?.role}>
                                                                <option value="">Select Job Role</option>
                                                                <option value="Electrical Work">Electrical Work</option>
                                                            </select>
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="role"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group mb-3">
                                                            <label className="mb-1"><strong>Email </strong> <span className="ct_required_star">*</span></label>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                id="email"
                                                                value={values?.email}
                                                                readOnly
                                                            />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="email"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group mb-3">
                                                            <label className="mb-1"><strong>Password </strong> <span className="ct_required_star">*</span></label>
                                                            <div className="position-relative">
                                                                <input
                                                                    type={isEye1 ? "text" : "password"}
                                                                    className="form-control"
                                                                    id="password"
                                                                    onBlur={handleBlur}
                                                                    onChange={handleChange}
                                                                    value={values?.password}
                                                                />
                                                                <Eye isEye={isEye1} onClick={() => setIsEye1(!isEye1)} />
                                                            </div>
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="password"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group mb-3">
                                                            <label className="mb-1"><strong>Contact no. </strong> <span className="ct_required_star">*</span></label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="phone_no"
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                value={values?.phone_no}
                                                            />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="phone_no"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group mb-3">
                                                            <label className="mb-1"><strong>Home Address </strong> <span className="ct_required_star">*</span></label>
                                                            <textarea
                                                                className="form-control"
                                                                rows="4"
                                                                id="home_address"
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                value={values?.home_address}
                                                            ></textarea>
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="home_address"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group mb-3">
                                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                                <label className="mb-0"><strong>Status </strong> <span className="ct_required_star">*</span></label>
                                                                <div className="form-check form-switch">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="status"
                                                                        onBlur={handleBlur}
                                                                        onChange={handleChange}
                                                                        value={values?.status}
                                                                        checked={values.status}
                                                                    />
                                                                    <ErrorMessage
                                                                        errors={errors}
                                                                        touched={touched}
                                                                        fieldName="status"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer justify-content-center border-0 ct_flex_wrap_575 gap-2">
                                                    <button type="button" className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal" onClick={() => setStaffDetails()}>Cancel</button>
                                                    <button
                                                        type="submit"
                                                        onClick={handleSubmit}
                                                        data-bs-dismiss={Object?.keys(errors)?.length == 0 && "modal"}
                                                        className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit ct_white_space_nowrap"
                                                    >Submit</button>
                                                </div>
                                            </form>
                                        )}
                                    </Formik>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade Committed_Price" id="ct_view_member" tabindex="-1" aria-labelledby="ct_view_memberLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>Staff Detail </strong></h4>
                                {staffDetails?.email &&
                                    <form>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Name</strong> <span className="ct_required_star">*</span></label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={staffDetails?.full_name ?? ''}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Job Role</strong> <span className="ct_required_star">*</span></label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={staffDetails?.role ?? ''}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Email </strong> <span className="ct_required_star">*</span></label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        value={staffDetails?.email ?? ''}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3 ">
                                                    <label className="mb-1"><strong>Password </strong> <span className="ct_required_star">*</span></label>
                                                    <div className="position-relative">
                                                        <input
                                                            type={isEye ? "text" : "password"}
                                                            className="form-control"
                                                            value={staffDetails?.password ?? ''}
                                                            readOnly
                                                        />
                                                        <Eye isEye={isEye} onClick={() => setIsEye(!isEye)} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Contact no. </strong> <span className="ct_required_star">*</span></label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={staffDetails?.phone_no ?? ''}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Home Address </strong> <span className="ct_required_star">*</span></label>
                                                    <textarea
                                                        className="form-control"
                                                        rows="4"
                                                        value={staffDetails?.home_address ?? ''}
                                                        readOnly
                                                    ></textarea>
                                                </div>
                                            </div>
                                            {/* <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <div className="d-flex align-items-center justify-content-between gap-2">
                                                        <label className="mb-0"><strong>Status </strong> <span className="ct_required_star">*</span></label>
                                                        <div className="form-check form-switch">
                                                            {staffDetails?.status == 1 ? 'Active' : 'Inactive'}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="modal-footer justify-content-center border-0 ct_flex_wrap_575 gap-2">
                                            <button type="button" className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </form>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default CreateStaff;