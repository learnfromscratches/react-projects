import styles from "./productCard.module.css"

const ProductCard = props =>{
    return(
        <div>
            <div className={styles.productCard}>
                <img className={styles.productImage} src={props.thumbnail}/>
                <div className={styles.price}>
                    <p>USD {props.price}</p>
                    <p>discount {props.discount}%</p>
                </div>
                <h3 className={styles.heading}>{props.title}</h3>
                <div className={styles.productDetails}>
                    <span>{props.brand}</span>
                    <span>{props.category}</span>
                    <span>{props.rating}</span>
                </div>
                <p className={styles.description}>{props.description}</p>
            </div>
        </div>
    )
}
export default ProductCard;