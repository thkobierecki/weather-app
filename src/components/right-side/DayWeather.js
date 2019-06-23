import React, { Component } from "react";

export default class DayWeather extends Component {
  render() {
    const { forecast_day, day } = this.props;
    return (
      <div className="day_weather_container">
        <div className="day_weather_img">
          <img src={day.day.condition.icon} />
        </div>
        <div className="day_weather_content">
            <div className='day_weather_date'>
                <h3>{day.date}</h3>
            </div>
            <div className='day_weather_temp'>
                <span>{day.day.avgtemp_c} °C</span>
                <span>{day.day.condition.text}</span>
            </div>
        </div>
      </div>
    );
  }
}
