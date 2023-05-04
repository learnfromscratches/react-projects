import styles from './recipe.module.css';

const RecipeCard = props =>{
    return(
        <div>
            <div className={styles.foodCard}>
                <img src={props.recipee.image}/>
                 <div className={styles.cardContent}>
                     <h1>{props.recipee.title}</h1>
                     <p>{props.recipee.description}</p>
                 </div>
            </div>
        </div>
    )
}
export default RecipeCard;