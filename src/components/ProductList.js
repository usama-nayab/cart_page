import React from 'react';
import Product from './Product';

export default function ProductList(props) {
    return (
        props.productList.length > 0 ?
            props.productList.map((product, i) => {
                return (
                    <Product product={product} key={i} index={i} inc={props.inc} dec={props.dec} remove={props.remove} />
                );
            })
            : <h1 className='text-center mt-5' >No Any Product In The Cart</h1>
    );

}