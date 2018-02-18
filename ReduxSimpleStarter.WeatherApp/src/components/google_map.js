import React, { Component } from 'react';

class GoogleMap extends Component {

    // one of the lifecycle function, automatically called
    // as soon as the component is created
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    // render is also a lifecycle function
    render() {
        return <div ref="map" />;
    }
}

export default GoogleMap;
