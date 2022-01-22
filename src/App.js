import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import React, { useState } from 'react';
import Additems from './components/Additems';
import Footer from './components/Footer';

function App() {
    const productList = [
        {
            name: "Iphone Xr",
            price: 75000,
            quantity: 0
        },
        {
            name: "Iphone Xs Max",
            price: 89000,
            quantity: 0
        },
        {
            name: "Iphone 8+",
            price: 50000,
            quantity: 0
        }
    ]

    const[len , newLen] = useState(productList.length);

    const [PL, setProductList] = useState(productList);
    const [totalAmount, setTotalAmount] = useState(0);
    const [reset, setReset] = useState(productList);

    const incQuantity = (index) => {
        let newProductList = [...PL];
        newProductList[index].quantity++;
        setProductList(newProductList);
        let newAmount = totalAmount;
        newAmount += newProductList[index].price;
        setTotalAmount(newAmount);

    }
    const decQuantity = (index) => {
        let newProductList = [...PL];
        let newAmount = totalAmount;
        if (newProductList[index].quantity > 0) {
            newProductList[index].quantity--;
            newAmount -= newProductList[index].price;
        }
        setProductList(newProductList);
        setTotalAmount(newAmount);
    }

    const resetFunc = () => {
        let newReset = [...reset];
        newReset.map((product) => {
            product.quantity = 0;
            setTotalAmount(0);
            setReset(newReset);
        })
    }

    const remove = (index) => {
        let newProductList = [...PL];
        let newAmount = totalAmount;
        newAmount -= newProductList[index].quantity * newProductList[index].price
        newProductList.splice(index, 1);
        newLen(newProductList.length);
        setProductList(newProductList);
        setTotalAmount(newAmount);
    }

    const addProduct = (name , price) => {
        let newProductList = [...PL];
        newProductList.push({
            name:name,
            price:Number(price),
            quantity:0
        });
        setProductList(newProductList);
        newLen(newProductList.length);
    }


    return (
        <>
            <Navbar len={len} tAmount={totalAmount}/>
            <Additems addProduct={addProduct} />
            <ProductList productList={PL} inc={incQuantity} dec={decQuantity} remove={remove} />
            <Footer tAmount={totalAmount} reset={resetFunc} />
        </>
    );
}

export default App;
