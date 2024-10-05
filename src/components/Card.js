import React from "react";
import './Card.css';

function Card({ card, index, isFlipped, onClick}) {
    return (
        <div className={ `card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
            {isFlipped ? card : 'X'}
        </div>
    );    
};

export default Card;