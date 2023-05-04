import styles from "./input.module.css";

const Input =({onType}) =>{
    return(
        <input className={styles.searchBar} placeholder="Search..." onChange={onType}></input>
    )
}
export default Input;