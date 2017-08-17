import React, { Component } from 'react';

const google = window.google;

class GoogleMap extends Component {
	componentDidMount(){
		const latlng = {lat : this.props.lat,lng : this.props.lon};
		if(google){
		const map = new google.maps.Map(this.refs.map,
			{
			  zoom: 10,
			  center : latlng
			});
		const marker = new google.maps.Marker({
          position: latlng,
          map: map,
          title: this.props.name
       });
		}
	}
	render(){
		return <div ref="map"/>;
	}
}

export default GoogleMap;