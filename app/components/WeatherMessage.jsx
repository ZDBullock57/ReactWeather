var React = require('react');

var WeatherMessage = ({location, temp}) => {

  return (
      <h3 className="text-center">"Its fuckin {temp} in {location}. Ya dig?"</h3>
  )
};

module.exports = WeatherMessage;
