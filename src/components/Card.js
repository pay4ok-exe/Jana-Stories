// src/components/Card.js
import React from 'react';
import '../Card.css'; // Ensure you have appropriate styling in Card.css

function Card({ item }) {
    return (
        <div className="card">
            <img src={item.urlToImage} alt="Article image" />
            <div className="card-content">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <div className="card-footer">
                    <span>{item.author} · {item.publishedAt}</span>
                    <span className="tag">{item.section}</span>
                    <span>{item.source.name}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;
