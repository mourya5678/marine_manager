import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { getBussinessProfileData } from '../redux/actions/authActions';
import { pageRoutes } from '../routes/PageRoutes';

const BusinessProfile = () => {
    const { isLoading, bussiness_profile } = useSelector((state) => state?.authReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isToggle, setIsToggle] = useState(false);

    useEffect(() => {
        dispatch(getBussinessProfileData());
    }, []);

    const onHandleClick = () => {
        setIsToggle(!isToggle);
    }

    console.log({ bussiness_profile }, 'bussiness_profile');

    if (isLoading) {
        return "Loading..."
    }
    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="business_profile" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <div className="ct_dashbaord_middle">
                        <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">
                            <h4 className="ct_fs_24 text-start ct_fw_700 ">Business Profile</h4>
                            <button onClick={() => navigate(pageRoutes.update_business_profile, { state: { data: bussiness_profile } })} className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_add_item ct_line_height_22 mx-0">Update Profile</button>
                        </div>
                        <div className="ct_white_bg_1">
                            <form action="">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Company Name</strong>
                                            </label>
                                            <input
                                                type="text"
                                                value={bussiness_profile?.company_name}
                                                className="form-control"
                                                readOnly
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Company Email</strong>
                                            </label
                                            >
                                            <input type="email" className="form-control" value={bussiness_profile?.email} readOnly />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Company Phone number</strong>
                                            </label
                                            >
                                            <input type="number" className="form-control" value={bussiness_profile?.phone_no} readOnly />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Accounting Software Used</strong>
                                            </label>
                                            <input type="text" className="form-control" value={bussiness_profile?.accounting_software_used} readOnly />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>About Us</strong>
                                            </label
                                            >
                                            <textarea className="form-control" rows="3" value={bussiness_profile?.about_us} readOnly></textarea>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Service Region</strong>
                                            </label
                                            >
                                            <textarea className="form-control" rows="3" value={bussiness_profile?.service_region} readOnly></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <label for="" className="mb-1"
                                            ><strong>Services Offered</strong>
                                            </label
                                            >
                                            <textarea className="form-control" rows="3" value={bussiness_profile?.services_offered} readOnly></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="mb-1"
                                            ><strong>Company Logo</strong>
                                            </label>
                                        </div>
                                        {bussiness_profile?.company_logo &&
                                            <div className="my-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div className="d-flex align-items-center gap-3">
                                                    <img src={bussiness_profile?.company_logo} alt="" className="ct_uploaded_img" />
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label className="mb-1"
                                            ><strong>Trade Licenses if required</strong>
                                            </label>
                                        </div>
                                        {bussiness_profile?.trade_license &&
                                            <div className="my-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                <div className="d-flex align-items-center gap-3">
                                                    <img src={bussiness_profile?.trade_license} alt="" className="ct_uploaded_img" />
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <div className="form-group">
                                            <label for="" className="mb-1"
                                            ><strong>Professional indemnity insurance</strong>
                                            </label>
                                        </div>
                                        {bussiness_profile?.InsuranceFile?.length != 0 &&
                                            bussiness_profile?.InsuranceFile?.map((item, i) => (
                                                <div className="mt-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <iframe
                                                            src={item?.filename}
                                                            title={`pdf-viewer-${i}`}
                                                            width="200"
                                                            height="200"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BusinessProfile;