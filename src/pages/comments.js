import SingleComment from "@/components/singleComment";
import styles from "@/styles/comments.module.css"
import { useEffect, useState } from "react";

const Comments = () =>{

    const [comment,setComment] = useState([])

    const fetchComment = async()=>{
        const result = await fetch("https://dummyjson.com/comments")
        const out = await result.json()
        const convertedOut = out.comments
        setComment(convertedOut)
    }

    useEffect(()=>{fetchComment()},[])
    return(
        <div>
            <header>
                <h1 className={styles.header}>Comments</h1>
            </header>
            <section className={styles.commentSection}>
                {comment.map(item =>{
                    return(
                        <SingleComment user = {item.user.username} body ={item.body}/>
                    )
                })}
            </section>
        </div>
    )
}
export default Comments;