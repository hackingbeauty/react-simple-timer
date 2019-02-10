import React, {Component}       from 'react'
import {render}                 from 'react-dom'
import { FloatingActionButton,
        MuiThemeProvider }      from 'material-ui';
import injectTapEventPlugin    from 'react-tap-event-plugin';
import MicrophoneOn            from 'material-ui/svg-icons/av/mic';
import MicrophoneOff             from 'material-ui/svg-icons/av/stop';

import ReactSimpleTimer from '../../src';

require ('./styles.scss');

injectTapEventPlugin();

class Demo extends Component {
  constructor(props){
    super(props);

    this.state = {
      play: false,
      pause: false
    }
  }

  start= () => {
    this.setState({
      play: true,
      pause: false
    });
  }

  stop= () => {
    this.setState({
      play: false
    });
  }

  pause= () => {
    this.setState({
      pause: true
    })
  }

  render() {
    const { play, pause } = this.state

    return(
      <MuiThemeProvider>
        <div>
          <ReactSimpleTimer play={play}  pause={pause}/>
          <button onTouchTap={this.start}>Start</button>
          <button onTouchTap={this.stop}>Stop</button>
          <button onTouchTap={this.pause}>Pause</button>
        </div>
    </MuiThemeProvider>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
