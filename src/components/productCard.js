import Link from "next/link";
import styles from "./productCard.module.css"
import Image from "next/image";


const ProductCard = props => {
    return (
        <div>
            <Link href= {`/products/${props.id}`}>
                <div className={styles.productCard}>
                    <Image width={300} height={350} className={styles.productImage} src={props.thumbnail} />
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
            </Link>
        </div>
    )
}
export default ProductCard;