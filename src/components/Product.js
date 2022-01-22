import React from 'react';
export default function Product(props) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-5">
                    <h2> {props.product.name} <span className="badge bg-secondary mx-2">₨:{props.product.price}</span> </h2>
                </div>
                <div className="col-sm-3">
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-danger" onClick={() => props.dec(props.index)} >-</button>
                        <button type="button" className="btn btn-warning">{props.product.quantity}</button>
                        <button type="button" className="btn btn-success" onClick={() => props.inc(props.index)} >+</button>
                    </div>
                </div>
                <div className="col-sm-2">
                    <p>Rs:{props.product.quantity * props.product.price}</p>
                </div>
                <button className="btn col-sm-2 btn-danger" onClick={() => props.remove(props.index)}>Remove</button>
            </div>
        </div>
    );
}