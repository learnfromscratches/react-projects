import styles from './navbar.module.css';

const Navbar = () =>{
    return(
        <div>
        <div className={styles.navbar}>
            <p><span>Recipe</span>Master</p>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>My account  </li>
            </ul>
        </div>
        </div>
    );
}
export default Navbar;