import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Header from '../components/Header';
import '../Invoice.css';
import Sidebar from '../components/Sidebar';
import { pageRoutes } from '../routes/PageRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { createBoatInvoice, getGeneratedInvoiceData } from '../redux/actions/maintainedBoatsActions';
import Loader from '../components/Loader';
import moment from 'moment';

const Invoice = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isToggle, setIsToggle] = useState(false);
  const { state } = useLocation();
  const { isLoading2, getInvoiceData } = useSelector(
    (state) => state?.maintainedReducer
  );

  const onHandleClick = () => {
    setIsToggle(!isToggle);
  };

  useEffect(() => {
    dispatch(getGeneratedInvoiceData({ payload: state?.invoice_id }));
  }, []);

  console.log(getInvoiceData);

  if (isLoading2) {
    return <Loader />;
  };
  return (
    <div className="ct_dashbaord_bg">
      <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
        <Sidebar path="Invoice" />
        <div className="ct_content_right">
          <Header onClick={onHandleClick} />
          <>
            {/* <section className="px-3">
            <div className="col-md-12 mx-auto">
              <div className="ct_invoice_bg">
                <div className="ct_invoice_cnt">
                  <h4 className="ct_h4 text-center">Invoice</h4>
                </div>
                <div className="ct_logo23">
                  <img src="img/Logo_blue.png" />
                </div>
                <div className="row">
                  <div className="col-md-8 mb-4">
                    <div className="ct_invoice_num_cnt">
                      <h6 className="ct_fs_14">Cruiser Service Center</h6>
                      <p className="ct_fs_14">221 B baker street service road <br /> Bricklin, 8505  </p>
                    </div>
                    <div className="ct_invoice_num_cnt">
                      <h6 className="mb-1 ct_fs_14">+1 (566)369 2145</h6>
                      <p className="ct_fs_14">service@domain.com </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="ct_invoice_num_cnt">
                      <h6 className="ct_fs_14">Date</h6>
                      <p className="mb-2 ct_fs_14 ">26-02-2024
                      </p>
                    </div>
                    <div className="ct_invoice_num_cnt">
                      <h6 className="ct_fs_14">Invoice No.</h6>
                      <p className="ct_fs_14">236599
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-4 mb-4 mb-md-0">
                    <div className="ct_invoice_num_cnt">
                      <h6 className="ct_fs_14">Bill to</h6>
                      <p className="mb-1 ct_fs_14">Semit Nudroin
                      </p>
                      <p className="mb-1 ct_fs_14">Brezza BoatsPeris, 2356</p>
                      <p className="mb-1 ct_fs_14">
                        +1 (256)369 8965
                      </p>
                      <p className="mb-0 ct_fs_14">
                        boat@domain.com
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4 mb-md-0">
                    <div className="ct_invoice_num_cnt">
                      <h6 className="ct_fs_14">Boat Details</h6>
                      <p className="mb-1 ct_fs_14">Boat Name -  <span className="ct_fw_600">Sunshine</span>
                      </p>
                      <p className="mb-1 ct_fs_14">Make - <span className="ct_fw_600"> YAMAHA</span>
                      </p>
                      <p className="mb-1 ct_fs_14">Model -  <span className="ct_fw_600"> JPFTV455</span>
                      </p>
                      <p className="mb-1 ct_fs_14">Boat Name - <span className="ct_fw_600"> Sunshine</span>
                      </p>
                      <p className="mb-0 ct_fs_14">Rego -  <span className="ct_fw_600"> ABCD123</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4 mb-md-0">
                    <div className="ct_invoice_num_cnt">
                      <h6 className="ct_fs_14">Payment Due Date</h6>
                      <p className="ct_fs_14">26-02-2024
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-12">
                    <div className="table-responsive">
                      <table className="table ct_invoice_table">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Description</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td contenteditable="true">Full antifoul of hull</td>
                            <td contenteditable="true">$ 2560</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td contenteditable="true">Hull clean</td>
                            <td contenteditable="true">$ 560</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td contenteditable="true">Engine Service</td>
                            <td contenteditable="true">$ 260</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td contenteditable="true">Prop speed</td>
                            <td contenteditable="true">$ 256</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td contenteditable="true">Plumbing and bilg system</td>
                            <td contenteditable="true">$ 20</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td contenteditable="true">Deck maintenance</td>
                            <td contenteditable="true">6</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td contenteditable="true">Dock rent</td>
                            <td contenteditable="true">$ 170</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="ct_grid_2 mt-4">
                      <div>
                        <h6 className="ct_fw_600">Paid with Visa •••• 5876</h6>
                        <p className="ct_fs_14">Your payment may be processed internationally. Additional bank fees may apply.</p>
                      </div>
                      <div className="ct_price_totle_list">
                        <ul>
                          <li>
                            <p className="mb-0 ct_fs_14">Total - </p>
                            <p className="mb-0 ct_fs_14 ct_fw_600">$ 3,886</p>
                          </li>
                          <li>
                            <p className="mb-0 ct_fs_14">Discount - </p>
                            <p className="mb-0 ct_fs_14 ct_fw_600"> $   389</p>
                          </li>
                          <li>
                            <p className="mb-0 ct_fs_14">Tax rate -  </p>
                            <p className="mb-0 ct_fs_14 ct_fw_600">  10%</p>
                          </li>
                          <li>
                            <p className="mb-0 ct_fs_14">Total tax -</p>
                            <p className="mb-0 ct_fs_14 ct_fw_600">$ 350</p>
                          </li>
                          <li>
                            <p className="mb-0 ct_fs_14">Total Due - </p>
                            <p className="mb-0 ct_fs_14 ct_fw_600"> $  3847</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-12">
                    <div className="ct_invoice_num_cnt">
                      <h6 className="ct_fs_14 mb-1">Terms & Condition</h6>
                      <p className="ct_fs_14">Semit Nudroin
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <a href="javascript:void(0)" contenteditable="false" className="ct_custom_btm  ct_news_ltr_btn" data-bs-toggle="modal" data-bs-target="#confirm_save">Save</a>
                </div>
              </div>
            </div>
          </section> */}
          </>
          <section class="px-3 mb-5">
            <div class="col-md-9 mx-auto">
              <div class="cti_invoice_bg">
                <div class="cti_grid_2_1">
                  <div class="cti_logo23">
                    <img src="img/Logo_blue.png" class="mb-0" />
                  </div>
                  <div>
                    <p class="mb-1">Phone No : {getInvoiceData?.boat?.phone_no ?? ''}</p>
                    <p class="mb-1">Email : {getInvoiceData?.boat?.email ?? ''}</p>
                    <p class="mb-0">HIN : {getInvoiceData?.boat?.vin ?? ''}</p>
                    <p class="mb-0">Rego : {getInvoiceData?.boat?.rego ?? ''}</p>
                  </div>
                </div>
                <div class="d-flex align-items-center gap-3 flex-wrap justify-content-between mt-5 pt-4">
                  <p class="mb-0">{getInvoiceData?.boat?.owners_name ?? ''}
                  </p>
                  <div class="cti_invoice_amoount_dtl">
                    <ul>
                      <li>
                        <p class="mb-1">PLEASE PAY BY
                        </p>
                        <h6 class="mb-0">{getInvoiceData?.pleasePayByDate ? moment(getInvoiceData?.pleasePayByDate).format('DD-MM-YYYY') : ''}
                        </h6>
                      </li>
                      <li>
                        <p class="mb-1">AMOUNT
                        </p>
                        <h6 class="mb-0">${getInvoiceData?.totalAmount ?? 0}
                        </h6>
                      </li>
                      <li>
                        <p class="mb-1">INVOICE DATE
                        </p>
                        <h6 class="mb-0">{getInvoiceData?.createdAt ? moment(getInvoiceData?.createdAt).format('DD-MM-YYYY') : ''}
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <h5 class="text-end cti_fw_700 mt-4 mb-3">TAX INVOICE NO. {getInvoiceData?.invoiceNumber ?? 0}</h5>
                {getInvoiceData?.tasks?.length != 0 && getInvoiceData?.tasks?.map((item, i) => (
                  <>
                    <ul class="cti_tax_invoice_bg">
                      <li>
                        <p class="mb-0 cti_fw_700">Job No.:
                        </p>
                        <p class="mb-0">{item?.jobNumber ?? ''}</p>
                      </li>
                      <li>
                        <p class="mb-0 cti_fw_700">Invoice Terms:
                        </p>
                        <p class="mb-0">COD</p>
                      </li>
                    </ul>
                    <div class="mt-3">
                      <h4 class="cti_fs_14 cti_fw_700 mb-1">Description</h4>
                      <h4 class="cti_fs_14 mb-0">{item?.description ?? ''}</h4>
                    </div>
                    <div class="mt-3">
                      <div class="mb-2">
                        <div class="table-responsive">
                          <table class="table cti_basic_table table-bordered">
                            <thead>
                              <tr>
                                <th>S.No.</th>
                                <th>Task</th>
                                <th>Time Allocated</th>
                                <th>Quoted Value</th>
                                <th>Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>{i + 1}</td>
                                <td>{item?.taskInfo ?? ''}</td>
                                <td>{item?.time_alloted ?? 0}</td>
                                <td class="right">${item?.quoted_value ?? 0}</td>
                                <td class="right">${item?.quoted_value ?? 0}</td>
                              </tr>
                              {/* <tr>
                                <td></td>
                                <td colspan="3" class="bold">*WORKSHOP CONSUMABLES</td>
                                <td class="right">$130.00</td>
                              </tr>
                              <tr>
                                <td></td>
                                <td colspan="3" class="bold">Mechanical Labour</td>
                                <td class="right">$2,475.00</td>
                              </tr>
                              <tr>
                                <td></td>
                                <td colspan="3" class="bold">Apprentice Marine Mechanic</td>
                                <td class="right">$330.00</td>
                              </tr>
                              <tr style={{ borderTop: "0px", borderBottom: "0px" }}>
                                <td colspan="4" class="border-0 border-top: 0px; text-end ct_fw_700">Sub-Total
                                  ex GST</td>
                                <td style={{ borderBottom: "0px", borderTop: "0px" }}>$6,170.44</td>
                              </tr>
                              <tr style={{ borderTop: "0px", borderBottom: "0px" }}>
                                <td colspan="4" class="border-0 text-end ct_fw_700">GST</td>
                                <td class="right" style={{ borderBottom: "0px" }}>$617.04</td>
                              </tr>
                              <tr style={{ borderTop: "0px", borderBottom: "0px" }}>
                                <td colspan="4" class="border-0 text-end ct_fw_700">Total</td>
                                <td class="right ct_border_btm_1">$6,787.48</td>
                              </tr> */}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {item?.JobServiceSheet?.length != 0 && item?.JobServiceSheet?.map((items, index) => (
                        <div class="mb-4">
                          <p class="cti_fs_14 cti_fw_700 mb-2">Job Sheet Task</p>
                          <div class="table-responsive mb-3">
                            <table class="table cti_basic_table table-bordered">
                              <thead>
                                <tr>
                                  <th>S.No.</th>
                                  <th>Person Attending</th>
                                  <th>Work Carried Out</th>
                                  <th>Work To Be Carried Out</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>{index + 1}</td>
                                  <td>{items?.personAttending ?? ''}</td>
                                  <td>{items?.workCarriedOut ?? ''}</td>
                                  <td class="right">{items?.workToBeCarriedOut ?? ''}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          {items?.Material?.length != 0 &&
                            <>
                              <p class="cti_fs_14 cti_fw_700 mb-2">Materials</p>
                              <div class="table-responsive">
                                <table class="table cti_basic_table table-bordered">
                                  <thead>
                                    <tr>
                                      <th>S.No.</th>
                                      <th>Person Attending</th>
                                      <th>Work Carried Out</th>
                                      <th>Work To Be Carried Out</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>{index + 1}</td>
                                      <td>{items?.personAttending ?? ''}</td>
                                      <td>{items?.workCarriedOut ?? ''}</td>
                                      <td class="right">{items?.workToBeCarriedOut ?? ''}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </>
                          }
                        </div>
                      ))}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <div class="modal fade" id="confirm_save" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="confirm_saveLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="confirm_saveLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="img/check_icon.png" alt="" />
              <h4>Confirm to Send</h4>
            </div>
            <div class="modal-footer justify-content-center gap-4">
              <button type="button" class="btn-secondary ct_custom_btm  ct_news_ltr_btn mx-0" data-bs-dismiss="modal">Close</button>
              <button type="button" class="ct_custom_btm  ct_news_ltr_btn mx-0" data-bs-dismiss="modal" onClick={() => navigate(pageRoutes.maintenance)}>Save</button>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Invoice;