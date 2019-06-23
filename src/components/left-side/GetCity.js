import React, { Component } from "react";

export default class GetCity extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="city"
            className="get-city__input"
            placeholder="City..."
          />
          <button className="get-city__btn" type="submit">
            Get weather
          </button>
        </form>
      </div>
    );
  }
}
