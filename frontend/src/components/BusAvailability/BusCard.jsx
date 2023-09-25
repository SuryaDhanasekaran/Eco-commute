import React, { useState, useEffect } from "react";
import "./BusCard.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BusAvailability = ({ selectedStartCity, selectedEndCity }) => {
  const [busRoutes, setBusRoutes] = useState([]);

  useEffect(() => {
    const fetchBusRoutes = async () => {
      if (selectedStartCity && selectedEndCity) {
        try {
          const response = await fetch(
            `http://localhost:4000/api/bus-routes/${selectedStartCity}/${selectedEndCity}`
          );
          const data = await response.json();
          if (data.length > 0) {
            setBusRoutes(data);
          }
        } catch (error) {
          console.error("Error fetching bus routes:", error);
        }
      }
    };

    fetchBusRoutes();
  }, [selectedStartCity, selectedEndCity]);
  
  const sliderSettings = {
    className: "center",
    centerMode: true,
    // dots: true,
    infinite: true,
    centerPadding: "40px",
    speed: 500,
    slidesToShow: 1,
    // slidesToScroll: 2,
  };

  return (
    <div className="bus-details">
      <div className="slider-container">
      <Slider {...sliderSettings}>
      {busRoutes.map((route, index) => (
        <div className="bus-columns-container" key={index}>
          <div className="bus-columns">
            <div className="bus-content">
              <p className="bus-secondary-heading">Operator: {route.operator}</p>
              <p className="bus-card-description">
                <b>Departure Time:</b> {route.departure_time}
              </p>
              <p className="bus-card-description">
                <b>Arrival Time:</b> {route.arrival_time}
              </p>
              <p className="bus-card-description">
                <b>Fare: </b> {route.fare}
              </p>
              <p className="bus-card-description">
                <b>Bus Type: </b> {route.bus_type}
              </p>
            </div>

            <div className="bus-button-container">
              <button className="bus-btn red-flag">
                Book<br></br>Now
              </button>
              <p className="bus-offer">
                Carbon Emission: {route.carbon_emission} gCO2/km
              </p>
            </div>
          </div>
        </div>
        
      ))}
      </Slider>
    </div>
    </div>
  );
};

export default BusAvailability;

