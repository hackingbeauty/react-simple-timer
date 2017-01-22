import React, {Component}       from 'react'
import {render}                 from 'react-dom'
import { FloatingActionButton,
        MuiThemeProvider }      from 'material-ui';
import injectTapEventPlugin    from 'react-tap-event-plugin';
import MicrophoneOn            from 'material-ui/svg-icons/av/mic';
import MicrophoneOff             from 'material-ui/svg-icons/av/stop';

import ReactSimpleTimer from '../../src/ReactSimpleTimer';

require ('./styles.scss');

injectTapEventPlugin();

class Demo extends Component {
  constructor(props){
    super(props);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.state = {
      play: false
    }
  }

  start() {
    this.setState({
      play: true
    });
  }

  stop() {
    this.setState({
      play: false
    });
  }

  render() {
    return(
      <MuiThemeProvider>
        <div>
          <ReactSimpleTimer play={this.state.play} />
          <button onTouchTap={this.start}>Start</button>
          <button onTouchTap={this.stop}>Stop</button>
        </div>
    </MuiThemeProvider>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
