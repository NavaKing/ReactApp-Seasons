import './seasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer:{
        text: 'Lets hit the Beach!',
        iconName: 'sun'
    },
    winter:{
        text: 'Burr, it is Chilly!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {

    if( month > 2 && month < 9 ) {
        return lat > 0 ? 'summer': 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }

};


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName } = seasonConfig[season];//text,iconName

    

    return (
            <div className={`season-display ${season}`}>
            <i className={`iconLeft massive ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`iconRight massive ${iconName} icon`}/>
        </div>
    );
};

export default SeasonDisplay;