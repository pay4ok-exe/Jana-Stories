// src/components/Modal.js
import React from 'react';
import '../assets/styles/Modal.css';

function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-content">
          <img src={content.image} alt="Article image" className="modal-img" />
          <div className="modal-details">
            <h2 className="modal-title">{content.title}</h2>
            <p className="modal-text">{content.text}</p>
            <div className="modal-footer">
              <span className="modal-date">{content.publishedAt}</span>
              <span className="modal-author">{content.author}</span>
              <span className="modal-section">{content.section}</span>
              <span className="modal-source">{content.sourceName}</span>
            </div>
            <a href={content.url} className="modal-link" target="_blank" rel="noopener noreferrer">
              Read Full Article
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
