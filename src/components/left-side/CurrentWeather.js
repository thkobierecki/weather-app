import React, { Component } from "react";

export default class CurrentWeather extends Component {
  render() {
    const {
      temp,
      city_name,
      icon,
      description,
      date,
      is_day,
      error
    } = this.props;
    return (
      <div>
        <div className="current-weather__container">
          <h3 className="current-weather__city">{city_name}</h3>
          <div className="current-weather__tempt">
            <img src={icon}/>
            <div className='current-weather__tempt_heading'><h2>{temp} {city_name ? '°C' : null}</h2></div>
          </div>
          <span className="current-weather__text">{description}</span>
          <span className="current-weather__date">{date}</span>
        </div>
      </div>
    );
  }
}
