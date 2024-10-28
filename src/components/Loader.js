import React from 'react';

const Loader = () => {
    return (
        <div className="ct_loader_main">
            <div className="ct_loader">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
                <div className="wave" id="wave5"></div>
                <div className="wave" id="wave6"></div>
                <div className="wave" id="wave7"></div>
                <div className="wave" id="wave8"></div>
                <div className="object">
                    <div className="boat"></div>
                    <div className="flag"></div>
                </div>
            </div>
            <h2>Loading</h2>
        </div>
    )
}

export default Loader;