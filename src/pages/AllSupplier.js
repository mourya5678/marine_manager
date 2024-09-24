import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const AllSupplier = () => {
    return (
        <div className="ct_dashbaord_bg">
            <div className="ct_dashbaord_main ct_active">
                <Sidebar path="all-supplier" />
                <div className="ct_content_right">
                    <Header />
                    <div className="ct_dashbaord_middle">
                        <div className="">
                            <div className="d-flex align-items-center justify-content-between ct_flex_wrap_767 gap-3 ">
                                <h4 className="mb-0 ct_fs_22">All Suppliers</h4>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="position-relative ct_search_input">
                                        <input type="text" className="form-control ct_flex_1" placeholder="Search" />
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
                                        <th>Company Name</th>
                                        <th>Company Description</th>
                                        <th>E-mail Address </th>
                                        <th>Contact no.</th>
                                        <th>City</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1 BuildMasters Inc.</td>
                                        <td>Mechanical Supplier</td>
                                        <td><a href="javascript:void(0)">BuildMasterslnc@buildmasterinc.co.uk</a></td>
                                        <td>
                                            (555) 789-0123
                  </td>
                                        <td className="text-end">
                                            New York
                  </td>
                                    </tr>
                                    <tr>
                                        <td>2 ConstructPro Supplies</td>
                                        <td>Electrical Supplier</td>
                                        <td><a href="javascript:void(0)">Info@Constructpro.co.uk</a></td>
                                        <td>
                                            (555) 567-8901
                  </td>
                                        <td className="text-end">
                                            Los Angeles
                  </td>

                                    </tr>
                                    <tr>
                                        <td>3 ExcelBuild Solutions</td>
                                        <td>Electrical sub-contractor</td>
                                        <td>
                                            <a href="javascript:void(0)">Excelinfo@Excelbuild.co.uk</a>
                                        </td>
                                        <td>
                                            (555) 456-7890
                  </td>
                                        <td className="text-end">
                                            Chicago
                  </td>

                                    </tr>
                                    <tr>
                                        <td>4 ConcreteCrafters Ltd.</td>
                                        <td>Electrical Supplier</td>
                                        <td>
                                            <a href="javascript:void(0)">Excelinfo@Excelbuild.co.uk</a>
                                        </td>
                                        <td>
                                            (555) 456-7890
                  </td>
                                        <td className="text-end">
                                            Chicago
                  </td>
                                    </tr>
                                    <tr>
                                        <td>5 ConcreteCrafters Ltd.</td>
                                        <td>Electrical Supplier</td>
                                        <td>
                                            <a href="javascript:void(0)">Excelinfo@Excelbuild.co.uk</a>
                                        </td>
                                        <td>
                                            (555) 456-7890
                  </td>
                                        <td className="text-end">
                                            Chicago
                  </td>
                                    </tr>
                                    <tr>
                                        <td>6 ConcreteCrafters Ltd.</td>
                                        <td>Electrical Supplier</td>
                                        <td>
                                            <a href="javascript:void(0)">Excelinfo@Excelbuild.co.uk</a>
                                        </td>
                                        <td>
                                            (555) 456-7890
                  </td>
                                        <td className="text-end">
                                            Chicago
                  </td>
                                    </tr>
                                    <tr>
                                        <td>7 ConcreteCrafters Ltd.</td>
                                        <td>Electrical Supplier</td>
                                        <td>
                                            <a href="javascript:void(0)">Excelinfo@Excelbuild.co.uk</a>
                                        </td>
                                        <td>
                                            (555) 456-7890
                  </td>
                                        <td className="text-end">
                                            Chicago
                  </td>
                                    </tr>
                                    <tr>
                                        <td>8 ConcreteCrafters Ltd.</td>
                                        <td>Electrical Supplier</td>
                                        <td>
                                            <a href="javascript:void(0)">Excelinfo@Excelbuild.co.uk</a>
                                        </td>
                                        <td>
                                            (555) 456-7890
                  </td>
                                        <td className="text-end">
                                            Chicago
                  </td>
                                    </tr>
                                    <tr>
                                        <td>9 ConcreteCrafters Ltd.</td>
                                        <td>Electrical Supplier</td>
                                        <td>
                                            <a href="javascript:void(0)">Excelinfo@Excelbuild.co.uk</a>
                                        </td>
                                        <td>
                                            (555) 456-7890
                  </td>
                                        <td className="text-end">
                                            Chicago
                  </td>
                                    </tr>
                                    <tr>
                                        <td>10 ConcreteCrafters Ltd.</td>
                                        <td>Electrical Supplier</td>
                                        <td>
                                            <a href="javascript:void(0)">Excelinfo@Excelbuild.co.uk</a>
                                        </td>
                                        <td>
                                            (555) 456-7890
                  </td>
                                        <td className="text-end">
                                            Chicago
                  </td>
                                    </tr>
                                </tbody>
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
                                <form>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Company Name</strong> <span
                                                    className="ct_required_star">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Company Description</strong> <span
                                                    className="ct_required_star">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Email Address </strong> <span
                                                    className="ct_required_star">*</span></label>
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>Contact No. </strong> <span
                                                    className="ct_required_star">*</span></label>
                                                <input type="number" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <label className="mb-1"><strong>City</strong> <span className="ct_required_star">*</span></label>
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center border-0">
                            <button type="button" className="ct_outline_btn ct_outline_orange" data-bs-dismiss="modal">Cancel</button>
                            <button
                                type="button ct_"
                                className="ct_custom_btm ct_border_radius_0 ct_btn_fit ct_news_ltr_btn ct_modal_submit"
                                data-bs-dismiss="modal"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllSupplier;