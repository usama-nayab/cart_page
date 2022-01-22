import React from 'react';
export default function Footer(props) {
    return (
        <div className="container-fluid footer_row my-5">
            <div className="row foot_bot bg-dark">
                <button className='btn btn-danger col-sm-2 col-12' onClick={() => props.reset()} >Reset</button>
                <div className="bg-dark text-white pt-2 text-center col-sm-8"><h5>Total:{props.tAmount}</h5></div>
                <button className="btn btn-primary col-sm-2 col-12">Pay Now</button>
            </div>
        </div>
    );
}