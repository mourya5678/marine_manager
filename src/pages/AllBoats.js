import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const AllBoats = () => {
    return (
        <div className="ct_dashbaord_bg">
            <div className="ct_dashbaord_main ct_active">
                <Sidebar path="generate_invoice" />
                <div className="ct_content_right">
                    <Header />
                    <div className="ct_dashbaord_middle">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllBoats;