import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import style from './map-module.scss'

class AdressMap extends Component {
    static defaultProps = {
        center: {
            lat: 34.092989,
            lng: -118.328864
        },
        zoom: 15
    };

    render() {
        return (

            <div className={style.map} style={{ height: '500px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCub7pKRDZju62_aRtGlmMtl-T1LBthZL4' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

export default AdressMap;