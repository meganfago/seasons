import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'


class App extends Component {

    state = {
        latitude: null,
        errorMessage: ''
    }

    componentDidMount() {
        this.findTheLocation()
    }

    findTheLocation = () => {
        window.navigator.geolocation.getCurrentPosition(
            position => {this.setState({latitude: position.coords.latitude})},
            err => {this.setState({errorMessage: err.message})}
        )
    }

    returnContent=()=>{
        if(this.state.errorMessage && !this.state.latitude){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        
        if(!this.state.errorMessage && this.state.latitude){
           return <SeasonDisplay latitude={this.state.latitude}/>
        }

        return <Spinner message="Please Accept Location Request"/> ;
    }

    render() {
        return (
            <div>
                {this.returnContent()}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
