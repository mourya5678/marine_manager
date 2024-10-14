import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { AddSupplierSchema } from '../auth/Schema';
import { addSupplierDetails, getSupplierData } from '../redux/actions/staffActions';
import ErrorMessage from '../components/ErrorMessage';

const AllSupplier = () => {
    const { isLoading, supplier_data } = useSelector((state) => state?.staffReducer);
    const dispatch = useDispatch();
    const [isToggle, setIsToggle] = useState(false);
    const [searchData, setSearchData] = useState();
    const [allSupplierData, setAllSupplierData] = useState(supplier_data)

    const initialState = {
        company_name: '',
        company_description: '',
        email: '',
        city: '',
        phone_no: '',
    };

    useEffect(() => {
        dispatch(getSupplierData());
    }, []);

    useEffect(() => {
        setAllSupplierData(supplier_data);
    }, [supplier_data]);

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    };

    const onHandleAddSupplier = async (values, { setSubmitting }) => {
        setSubmitting(false);
        const callback = (response) => {
            if (response.success) {
                dispatch(getSupplierData());
            }
        };
        dispatch(addSupplierDetails({ payload: values, callback }))
    };

    const onHandleSearchData = (e) => {
        setSearchData(e.target.value)
        if (e?.target?.value != '') {
            const data = supplier_data.filter((item) => {
                if (item?.company_name?.toLowerCase().includes(e.target.value.toLowerCase())) { return item; }
            })
            setAllSupplierData(data);
        }
    };

    if (isLoading) {
        return "Loading..."
    }
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="all-supplier" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="">
                            <div className="d-flex align-items-center justify-content-between ct_flex_wrap_767 gap-3 ">
                                <h4 className="mb-0 ct_fs_22">All Suppliers</h4>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="position-relative ct_search_input">
                                        <input value={searchData} onChange={onHandleSearchData} type="text" className="form-control ct_flex_1" placeholder="Search company name" />
                                        <i className="fa-solid fa-magnifying-glass "></i>
                                    </div>
                                    <button className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item"
                                        data-bs-toggle="modal" data-bs-target="#ct_add_supplier">Add Supplier</button>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive mt-3">
                            <table className="table ct_project_table ct_custom_table_main">
                                <thead>
                                    <tr>
                                        <th>S.no.</th>
                                        <th>Company Name</th>
                                        <th>Company Description</th>
                                        <th>E-mail Address </th>
                                        <th>Contact no.</th>
                                        <th>City</th>
                                    </tr>
                                </thead>
                                {allSupplierData?.length != 0 ?
                                    <tbody>
                                        {allSupplierData?.map((item, i) => (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{item?.company_name ?? 'NA'}</td>
                                                <td>{item?.company_description ?? 'NA'}</td>
                                                <td><a href="javascript:void(0)">{item?.email ?? 'NA'}</a></td>
                                                <td>{item?.phone_no ?? 'NA'}</td>
                                                <td className="text-end">{item?.city ?? 'NA'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    :
                                    <tfoot>
                                        <tr>
                                            <td className="text-center bg-transparent border-0" colSpan="7">
                                                <div className="text-center">
                                                    <p className="mb-0 mt-3 ct_fs_24 ct_fw_400 ct_ff_poppin ct_clr_8C98A9 text-center">No supplier found</p>
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

            <div className="modal fade Committed_Price" id="ct_add_supplier" tabindex="-1" aria-labelledby="ct_add_supplierLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>New Supplier Details </strong></h4>
                                <Formik
                                    initialValues={initialState}
                                    validationSchema={AddSupplierSchema}
                                    onSubmit={(values, actions) => {
                                        onHandleAddSupplier(values, actions);
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
                                                        <label className="mb-1"><strong>Company Name</strong> <span
                                                            className="ct_required_star">*</span></label>
                                                        <input
                                                            id="company_name"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            value={values?.company_name}
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="company_name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1"><strong>Company Description</strong> <span
                                                            className="ct_required_star">*</span></label>
                                                        <input
                                                            id="company_description"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            value={values?.company_description}
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="company_description"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1"><strong>Email Address </strong> <span
                                                            className="ct_required_star">*</span></label>
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
                                                        <label className="mb-1"><strong>Contact No. </strong> <span
                                                            className="ct_required_star">*</span></label>
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
                                                        <label className="mb-1"><strong>City</strong> <span className="ct_required_star">*</span></label>
                                                        <input
                                                            id="city"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            value={values?.city}
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="city"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer justify-content-center border-0">
                                                <button type="button" className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal">Cancel</button>
                                                <button
                                                    type="submit ct_"
                                                    onClick={handleSubmit}
                                                    className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit"
                                                    data-bs-dismiss={values?.email != '' && Object?.keys(errors)?.length == 0 && "modal"}
                                                >
                                                    Submit
                            </button>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllSupplier;