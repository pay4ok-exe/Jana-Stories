// src/components/Card.js
import React from "react";
import "../assets/styles/Card.css";

function Card({ item, onClick }) {
  return (
    <div className="card" onClick={() => onClick(item)}>
      <img src={item.urlToImage} alt="Article" />
      <div className="card-content">
        <h2>{item.title}</h2>
        <p>{item.content}</p>
        <div className="card-footer">
          <span>
            {item.author} · {item.publishedAt}
          </span>
          <span className="tag">{item.section}</span>
          <span>{item.source.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
