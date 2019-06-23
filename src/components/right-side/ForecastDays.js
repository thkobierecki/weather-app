import React, { Component } from "react";
import DayWeather from './DayWeather';
export default class ForecastDays extends Component {
  render() {
    const { forecast_days } = this.props;
    return (
      <div className='forecast_days_container'>
        {forecast_days &&
          forecast_days.map((day, idx) => {
            return (
              <DayWeather
                forecast_day={forecast_days}
                day={day}
                key={idx}
              />
            );
          })}
      </div>
    );
  }
}
