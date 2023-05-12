import styles from "./singleProduct.module.css"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Image from "next/image"

const SingleProduct = () => {

    const [product, setProduct] = useState({})
    const router = useRouter()

    const apiCall = async () => {
        if (router.query.id) {
            console.log(router.query.id)
            const result = await fetch(`https://dummyjson.com/products/${router.query.id}`);
            const convertedResult = await result.json()
            setProduct(convertedResult)
        }
    }
    useEffect(() => { apiCall() }, [router.query.id])
    console.log(product)
    return (
        <div>
            <h1 className={styles.header}>Single product</h1>

            <div className={styles.productDetails}>
                <div className={styles.leftPane}>
                    <Image width={300} height={200} src={product.thumbnail} />
                </div>
                <div className={styles.rightPane}>
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <p>Price : {product.price}</p>
                    <p>discount : {product.discountPercentage}%</p>
                    <p>rating : {product.rating}</p>
                </div>
            </div>

        </div>
    )
}
export default SingleProduct;