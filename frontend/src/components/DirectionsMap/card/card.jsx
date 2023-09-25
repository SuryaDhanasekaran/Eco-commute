import React from 'react';
import './card.css'; 

const Card = (props) => {
  const { title, content, icon, showDetails, toggleDetails } = props;

  const handleButtonClick = (event) => {
    event.preventDefault(); 
    toggleDetails(); 
  };

  return (
    <div className="card">
      <a href="#" onClick={handleButtonClick}>
        <div className="card--display">
          <i className="material-icons">{icon}</i>
          <h2>{title}</h2>
        </div>
        <div className="card--hover">
          <h2>{title}</h2>
          <p>{content}</p>
          <button className="link" onClick={handleButtonClick}>
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
        </div>
      </a>
      <div className="card--border"></div>
    </div>
  );
};

export default Card;
