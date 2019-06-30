import React, { Component } from 'react';

class SeasonDisplay extends Component {

    getSeason =(latitude, month) =>{
        if(month > 2 && month < 9){
           return latitude > 0 ? 'summer': 'winter'
        } else {
            return latitude < 0 ? 'winter': 'summer'
        }
    }

    render(){
        const season = this.getSeason(this.props.latitude, new Date().getMonth())
        // const text = season === 'winter' ? "brrrr it is chilly" : "lets hit the beach!"; 
        // const icon = season === 'winter' ? 'snowflake' : 'sun';  
        const seasonConfig = {
            summer: {
              text: "Let's hit the beach!",
              iconName: 'sun'
            },
            winter: {
              text: 'Burr it is cold!',
              iconName: 'snowflake'
            }
          }; 
          const { text, iconName } = seasonConfig[season];     
        return (
            <div>
                <h3>Season: {season}</h3>
                <p>{text}</p>
                <i className={`${iconName} icon`}/>
            </div>
        )
    }
}

export default SeasonDisplay;