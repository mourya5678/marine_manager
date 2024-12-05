import React from 'react';

const Eye = ({ isEye, onClick }) => {
    return (
        <div>
            <i className={`fa-regular ab_pointer ${!isEye ? 'fa-eye-slash' : 'fa-eye'} ct_hide_pass_wye`} onClick={onClick}></i>
        </div>
    )
}

export default Eye;