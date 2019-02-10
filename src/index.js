import React, {Component, PropTypes} from 'react';

export default class ReactSimpleTimer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      play: false,
      pause: false,
      timeType: 0,
      title: ''
    };
    // Bind early, avoid function creation on render loop
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.elapseTime = this.elapseTime.bind(this);
  }

  componentDidMount() {
    if(this.props.play) {
      this.start();
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.pause) {
      this.pause()
    } else if(nextProps.play){
      this.start();
    } else {
      this.stop();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  elapseTime() {
    if (this.state.play === true) {
      let newState = this.state.time + 1;
      this.setState({time: newState});
    }
  }

  format(seconds) {
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 3600 % 60);
    let timeFormated = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    return timeFormated;
  }

  restartInterval() {
    clearInterval(this.interval);
    this.interval = setInterval(this.elapseTime, 1000);
  }

  start() {
    if (true === this.state.play) return;

    this.restartInterval();

    this.setState({
      play: true
    });
  }

  stop(resetFor = this.state.time) {
    clearInterval(this.interval);
    let time = this.format(resetFor);
    this.setState({play: false, time: 0});
  }

  pause() {
    const { time } = this.state
    clearInterval(this.interval);
    this.setState({play: false, time: time });
  }

  render() {
    const { time } = this.state
    return (
      <div className="display timer">
        <span className="time">{this.format(time)}</span>
      </div>
    );
  }
};
