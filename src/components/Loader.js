import React from 'react';
import loader from '../img/spinner.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={loader} className="loader__icon" alt="" />
        </div>
    );
};

export default Loader;
