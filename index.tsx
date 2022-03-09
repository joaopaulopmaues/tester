import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {Board} from './Component/Board';
import Hello from './Hello';
import {TooltipButton} from './Component/CardUI'

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
        <Board/>
        <TooltipButton/>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
