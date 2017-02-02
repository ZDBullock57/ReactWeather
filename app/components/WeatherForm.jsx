var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length > 0)
    {
      this.refs.location.value = '';
      this.props.onNewData(location);
    }

  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="search" ref="location" placeholder="Search Weather by City"/>
        </div>
        <div>
          <button className="button expanded hollow">Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;
