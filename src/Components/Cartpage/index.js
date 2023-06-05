import React from 'react';
import "./index.css"
// import start1 from "./icons/cart.png";

const Card = ({ title, description, fontColor, bgColor, cardIcon }) => {
    return (
        <div className="card" style={{ backgroundColor: bgColor }}>
            <div className="card-content">
                <div className="card-text">
                    <h2 className="card-title" style={{ color: fontColor }}>
                        {title}
                        <img className="card-image" src={cardIcon} alt="" />
                    </h2>
                    <p className="card-description">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;