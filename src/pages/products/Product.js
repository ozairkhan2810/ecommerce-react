import React from 'react'

import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import ProductList from "./ProductList"

const Product = () => {
    return (
        <>
            <Navbar />
            <ProductList />
            <Footer />
        </>
    )
}

export default Product