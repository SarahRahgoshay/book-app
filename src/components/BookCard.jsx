import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

import styles from './BookCard.module.css';

const BookCard = ({data , handleLikedList}) => {
    
    const {title , image , author , pages , language} = data;
    
    const[like , setLike] = useState(false);

    const likeHandler = () => {
        setLike((like) => !like)
        handleLikedList(data , like)
    }

    return (
        <div className= {styles.card}>
            <img src={image} alt={title} />
            <div className= {styles.info}>
                <h3> {title} </h3>
                <p> {author} </p>
                <div>
                    <span> {language} </span>
                    <span> {pages} psges </span>
                </div>
            </div>
            <button onClick={likeHandler}>
                 <AiFillHeart color={like ? "red" : "#e0e0e0"} fontSize="1.8rem" />
            </button>
        </div>
    );
};

export default BookCard;