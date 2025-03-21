import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import '../Invoice.css';
import Sidebar from '../components/Sidebar';
import { pageRoutes } from '../routes/PageRoutes';

const TodayInvoice = () => {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = useState(false);
    const onHandleClick = () => {
        setIsToggle(!isToggle);
    }

    return (
        <div className="ct_dashbaord_bg">
            <div className={`ct_dashbaord_main ${isToggle == false && 'ct_active'}`}>
                <Sidebar path="Invoice" />
                <div className="ct_content_right">
                    <Header onClick={onHandleClick} />
                    <section className="px-3">
                        <div className="col-md-12 mx-auto">
                            <div className="ct_invoice_bg">
                                <div className="ct_invoice_cnt">
                                    <h4 className="ct_h4 text-center">Invoice</h4>
                                </div>
                                <div className="ct_logo23">
                                    <img src="img/Logo_blue.svg" />
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
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}


export default TodayInvoice;