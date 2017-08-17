import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';

class WeatherList extends Component { 

  renderWeather(cityData,i){
  	const tempArr = cityData.list.reduce((a,b) => { return [ ...a, b.main.temp] }, []);
  	const preArray = cityData.list.reduce((a,b) => { return [ ...a, b.main.pressure]}, []);
  	const humidArray = cityData.list.reduce((a,b) => { return [ ...a, b.main.humidity]},[]);
  	const {lat, lon} = cityData.city.coord;
  	return(
  			<tr key={cityData.city.id}>
  				<td>
  					<GoogleMap name={cityData.city.name} lat={lat} lon={lon} />
  				</td>
  				<td>
  					<Chart data = { tempArr } color = "orange" unit="K"/>
  				</td>
  				<td>
  				<Chart data = { preArray } color = "blue" unit="hPa"/>
  				</td>
  				<td>
  				<Chart data = { humidArray } color = "green" unit="%"/>
  				</td>
  			</tr>
  		);
  }
  
  render(){
  	return(
  			<table className="table table-hover">
  				<thead>
  					<tr>
  						<th>City</th>
  						<th>Temperature (K)</th>
  						<th>Pressure (hPa)</th>
  						<th>Humidity (%)</th>
  					</tr>
  				</thead>
  				<tbody className="textleft">
  					{this.props.weather.map(this.renderWeather)}
  				</tbody>
  			</table>
  		);
  }
}

function mapStateToProps({ weather }){
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);