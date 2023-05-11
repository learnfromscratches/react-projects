import styles from "./singleComment.module.css"
import { FaYarn } from "react-icons/fa";


const SingleComment = props =>{

    return(
        <div>
            <div className={styles.card}>
                <span className={styles.avatar}><FaYarn/></span>
                <span>{props.user}</span>
                <p>{props.body}</p>
                <hr/>
            </div>
        </div>
    )
}
export default SingleComment;