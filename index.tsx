import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <h4>React-Bootstrap Tooltip Component</h4>
        <OverlayTrigger
          delay={{ hide: 450, show: 300 }}
          overlay={(props) => (
            <Tooltip {...props}>
              Hii, I am a simple tooltip information!!!
            </Tooltip>
          )}
          placement="bottom"
          ><Button variant="warning">Tooltip Button</Button>
          </OverlayTrigger>,
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
