import styles from "@/styles/products.module.css"
import ProductCard from "@/components/productCard";
import { useState } from "react";
import { useEffect } from "react";

const Products = () => {

    const [product, setProduct] = useState([])  
    const apiCall = async() =>{
        const result = await fetch('https://dummyjson.com/products');
        const covertedResult = await result.json()
        const data = covertedResult.products;
        setProduct(data)
    }
    useEffect(()=>{apiCall()},[])
    return (
        <div>
            <div className={styles.ProductsBody}>
                <h1 className={styles.heading}>Products</h1>
                <div className={styles.card}>
                    {product.map(item => (
                        <ProductCard title = {item.title} description ={item.description} price = {item.price} brand = {item.brand} category = {item.category} rating = {item.rating} thumbnail = {item.thumbnail} discount = {item.discountPercentage}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Products;