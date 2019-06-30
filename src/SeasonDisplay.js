import React, { Component } from 'react';

class SeasonDisplay extends Component {
    render(){
        return (
            <div>
                <h2> Latitude: {this.props.latitude}</h2>
            </div>
        )
    }
}

export default SeasonDisplay;