import React, { Component } from "react";
import GetCity from "./components/left-side/GetCity";
import CurrentWeather from "./components/left-side/CurrentWeather";
import ForeastDay from "./components/right-side/ForecastDays";
import "./App.css";

export default class App extends Component {
  state = {
    temp: undefined,
    city_name: undefined,
    icon: undefined,
    description: undefined,
    date: undefined,
    is_day: undefined,
    forecast_days: undefined,
    error: undefined
  };

  handleSubmit = async e => {
    e.preventDefault();
    const city = e.target.city.value;

    const api_call = await fetch(
      `https://api.apixu.com/v1/forecast.json?key=c34b52130a6540c5b32120528193004&q=${city}&days=5`
    );

    const resp = await api_call.json();

    if (city) {
      this.setState({
        temp: resp.current.temp_c,
        city_name: resp.location.name,
        icon: resp.current.condition.icon,
        description: resp.current.condition.text,
        date: resp.forecast.forecastday[0].date,
        is_day: resp.current.is_day,
        forecast_days: resp.forecast.forecastday,
        error: ""
      });
    } else {
      this.setState({
        error: "Please enter correct valid name of city.."
      });
    }
    console.log(city);
  };

  //local storage

  /*saveStateToLocalStr = () => {
    localStorage.setItem("data", JSON.stringify(this.state))
  };

  takeValueFromLocalStr = () => {
    let data = localStorage.getItem("data");
    city = JSON.parse(city);
    this.setState({
      city_name: city
    });
  };

  componentDidMount = () => {
    this.takeValueFromLocalStr();

    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStr.bind(this)
    );
  };

  componentWillUnmount = () => {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStr.bind(this)
    );

    this.saveStateToLocalStr();
  };*/

  render() {
    return (
      <div>
        <div className="main">
          <div className="container">
            <div className="left-side">
              <div className="left-side__container">
                <div className="left-side__title">
                  <h1>My Weather</h1>
                  <p>Find your weather</p>
                </div>

                <GetCity handleSubmit={this.handleSubmit} />
                <CurrentWeather
                  temp={this.state.temp}
                  city_name={this.state.city_name}
                  icon={this.state.icon}
                  description={this.state.description}
                  date={this.state.date}
                  is_day={this.state.is_day}
                  error={this.state.error}
                />
              </div>
            </div>
            <div className="right-side">
              <ForeastDay forecast_days={this.state.forecast_days} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
