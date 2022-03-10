import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {DropImage} from './Component/DropImage';
import Hello from './Hello';
import {CardUI} from './Component/CardUI'

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
        <DropImage/>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
