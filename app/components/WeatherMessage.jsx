var React = require('react');

var WeatherMessage = ({location, temp}) => {

  return (
    <div>
      <p>Its fuckin {temp} in {location}. Ya dig?</p>
    </div>
  )
};

module.exports = WeatherMessage;
