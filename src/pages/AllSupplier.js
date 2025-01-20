import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { AddSupplierSchema, UpdateSupplierSchema } from '../auth/Schema';
import { addSupplierDetails, getSupplierData, updateSupplierDetails } from '../redux/actions/staffActions';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import ReactPagination from '../layout/ReactPagination';
import PaginationDropdown from '../layout/PaginationDropdown';

const AllSupplier = () => {
    const { isLoading1, supplier_data } = useSelector((state) => state?.staffReducer);
    const dispatch = useDispatch();
    const [isToggle, setIsToggle] = useState(false);
    const [searchData, setSearchData] = useState('');
    const [allSupplierData, setAllSupplierData] = useState(supplier_data)
    const [supplierDetail, setSupplierDetail] = useState();
    const [currentPage, setCurrentPage] = useState(0);
    const [usersPerPage, setUserPerPages] = useState(5);

    const displayUsers = supplier_data?.filter((item) => {
        return item?.supplier?.email
            ?.toLowerCase()
            ?.includes(searchData?.toLowerCase())
    }).slice(
        currentPage * usersPerPage,
        (currentPage + 1) * usersPerPage
    );

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const initialState = {
        email: ''
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
                setSupplierDetail({})
                dispatch(getSupplierData());
            }
        };
        const data = {
            email: values?.email?.trim()
        }
        dispatch(addSupplierDetails({ payload: data, callback }))
    };

    const onHandleUpdateSupplier = async (values, { setSubmitting }) => {
        setSubmitting(false);
        setSupplierDetail();
        const callback = (response) => {
            if (response.success) {
                dispatch(getSupplierData());
            }
        };
        const data = {
            id: values?.id,
            company_name: values?.company_name?.trim(),
            company_description: values?.company_description.trim(),
            city: values?.city?.trim(),
            phone_no: `${values?.phone_no}`,
        }
        dispatch(updateSupplierDetails({ payload: data, callback }))
    };

    console.log({ supplier_data })

    if (isLoading1) {
        return <Loader />
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
                                        <input value={searchData} onChange={(e) => setSearchData(e.target.value)} type="text" className="form-control ct_flex_1 pe-5" placeholder="Search supplier by email" />
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
                                        <th>S.No.</th>
                                        {/* <th>Company Name</th> */}
                                        <th>E-mail Address </th>
                                        {/* <th>Contact No.</th>
                                        <th>City</th> */}
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                {displayUsers?.length != 0 ?
                                    <tbody>
                                        {displayUsers?.map((item, i) => (
                                            <tr>
                                                <td>{i + 1}</td>
                                                {/* <td>{item?.supplier?.company_name ?? 'NA'}</td> */}
                                                <td>{item?.supplier?.email ?? 'NA'}</td>
                                                {/* <td>{item?.supplier?.phone_no ?? 'NA'}</td>
                                                <td>{item?.supplier?.city ?? 'NA'}</td> */}
                                                <td className="text-end ct_action_btns"
                                                    onClick={() => setSupplierDetail({
                                                        company_name: item?.supplier?.company_name ?? '',
                                                        company_description: item?.supplier?.company_description ?? '',
                                                        city: item?.supplier?.city ?? '',
                                                        email: item?.supplier?.email ?? '',
                                                        phone_no: item?.supplier?.phone_no ?? '',
                                                        id: item?.supplier?.id,
                                                        abn: item?.supplier?.abn ?? '',
                                                        about_us: item?.supplier?.about_us ?? '',
                                                        first_name: item?.supplier?.first_name ?? '',
                                                        last_name: item?.supplier?.last_name ?? '',
                                                        phone_no: item?.supplier?.phone_no ?? ''
                                                    })}
                                                >
                                                    <i className="fa-solid fa-eye me-2 ab_pointer" data-bs-toggle="modal" data-bs-target="#ct_view_supplier"></i>
                                                    {/* <i className="fa-solid fa-pen ab_pointer" data-bs-toggle="modal" data-bs-target="#ct_update_supplier"></i> */}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    :
                                    <tfoot>
                                        <tr>
                                            <td className="text-center bg-transparent border-0" colSpan="7">
                                                <div className="text-center">
                                                    <p className="mb-0 mt-3 ct_fs_18 ct_fw_700 ct_ff_poppin ct_clr_8C98A9 text-center">No supplier found</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                }
                            </table>
                        </div>
                        <div className="mt-3">
                            {supplier_data?.length >= 5 &&
                                supplier_data?.length > 0 && <div className="d-flex align-items-center flex-wrap justify-content-between gap-3 mb-3">
                                    <PaginationDropdown
                                        onChange={(val) => {
                                            setUserPerPages(val);
                                            setCurrentPage(0);
                                        }}
                                    />
                                    <ReactPagination
                                        pageCount={Math.ceil(
                                            supplier_data.length / usersPerPage
                                        )}
                                        onPageChange={handlePageClick}
                                        currentPage={currentPage}
                                    />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade Committed_Price" id="ct_add_supplier" tabindex="-1"
                data-bs-backdrop='static' data-bs-keyboard="false"
                aria-labelledby="ct_add_supplierLabel"
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
                                        resetForm
                                    }) => (
                                        <form>
                                            <div className="row">
                                                {/* <div className="col-md-12">
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
                                                </div> */}
                                                {/* <div className="col-md-12">
                                                    <div className="form-group mb-3">
                                                        <label className="mb-1"><strong>Company Description</strong> <span
                                                            className="ct_required_star">*</span></label>
                                                        <textarea
                                                            id="company_description"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            value={values?.company_description}
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="company_description"
                                                        />
                                                    </div>
                                                </div> */}
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
                                                {/* <div className="col-md-12">
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
                                                </div> */}
                                                {/* <div className="col-md-12">
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
                                                </div> */}
                                            </div>
                                            <div className="modal-footer justify-content-center border-0">
                                                <button type="button" className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal" onClick={() => resetForm()}>Cancel</button>
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

            <div className="modal fade Committed_Price" id="ct_update_supplier" tabindex="-1" aria-labelledby="ct_update_supplierLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>Update Supplier Details </strong></h4>
                                {supplierDetail &&
                                    <Formik
                                        initialValues={supplierDetail}
                                        validationSchema={UpdateSupplierSchema}
                                        onSubmit={(values, actions) => {
                                            onHandleUpdateSupplier(values, actions);
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
                                                            <label className="mb-1"><strong>E-mail Address</strong> <span
                                                                className="ct_required_star">*</span></label>
                                                            <input
                                                                value={values?.email}
                                                                type="text"
                                                                className="form-control"
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group mb-3">
                                                            <label className="mb-1"><strong>Company Description</strong> <span
                                                                className="ct_required_star">*</span></label>
                                                            <textarea
                                                                id="company_description"
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                value={values?.company_description}
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
                                                    <button type="button" className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal" onClick={() => setSupplierDetail()}>Cancel</button>
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
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade Committed_Price" id="ct_view_supplier" tabindex="-1" aria-labelledby="ct_view_supplierLabel"
                data-bs-backdrop='static' data-bs-keyboard="false"
                aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="pt-4">
                                <h4 className="mb-4 text-center"><strong>Supplier Details </strong></h4>
                                {supplierDetail &&
                                    <form>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Company Name</strong></label>
                                                    <input
                                                        value={supplierDetail?.company_name ?? ''}
                                                        type="text"
                                                        className="form-control"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>E-mail Address</strong></label>
                                                    <input
                                                        value={supplierDetail?.email ?? ''}
                                                        type="text"
                                                        className="form-control"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Company Description</strong></label>
                                                    <textarea
                                                        value={supplierDetail?.company_description ?? ''}
                                                        className="form-control"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>Contact No. </strong></label>
                                                    <input
                                                        value={supplierDetail?.phone_no ?? ''}
                                                        type="text"
                                                        className="form-control"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group mb-3">
                                                    <label className="mb-1"><strong>City</strong></label>
                                                    <input
                                                        value={supplierDetail?.city ?? ''}
                                                        type="text"
                                                        className="form-control"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer justify-content-center border-0">
                                            <button type="button" className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal" onClick={() => setSupplierDetail()}>Cancel</button>
                                        </div>
                                    </form>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AllSupplier;