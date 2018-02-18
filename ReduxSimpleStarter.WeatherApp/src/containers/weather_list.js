import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData) {
        const nameOfCity = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;
        
        console.log(temps);
        console.log(pressures);
        console.log(humidities);

        return(
            <tr key={nameOfCity}>
                <td> <GoogleMap lon={lon} lat={lat} /> </td>
                <td> <Chart data={temps} color="orange" units="K"/> </td>
                <td> <Chart data={pressures} color="black" units="hPa"/> </td>
                <td> <Chart data={humidities} color="blue" units="%"/> </td>
            </tr>
        );
    }

    render() {
        // map over each object of the 'weather' which is an array
        // into the helper function renderWeather
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// function mapStateToProps(state) {
//     return { weather: state.weather };
// }
// the above function, equivalent in ES6:
function mapStateToProps({ weather }) {
    return {weather}; // an even shorter format of what should be: {weather: weathers}
}

// we are exporting the connected version of WeatherList, not just the 'simple'
// WeatherList type defined above:
export default connect(mapStateToProps)(WeatherList);