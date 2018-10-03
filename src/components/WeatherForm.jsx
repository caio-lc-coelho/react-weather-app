import React from 'react';
import "../css/weather-form.css";

class WeatherForm extends React.Component {
  render(){
    return (
      <form className="weather-form">
        <h1 className="form-title">Find your local Weather!</h1>
        <div>
          <label htmlFor="city">Enter city, state</label>
          <input type="text" id="city" name="city" placeholder="ex: Los Angeles, CA" />
        </div>
        <footer>
          <input type="submit" value="Find my Weather!" />
        </footer>
      </form>

    )
  }
}
export default WeatherForm;
