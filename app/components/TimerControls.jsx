var React = require('react');

var TimerControls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function () {
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button primary" onClick={this.onStatusChange('stopped')}>Stop</button>
      } else if (countdownStatus !== 'started') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    }

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button secondary hollow" onClick={this.onStatusChange('reset')}>Clear</button>
      </div>
    );
  }
});

module.exports = TimerControls;
