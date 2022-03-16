import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {DropImage} from './Component/DropImage';
import Hello from './Hello';
import {CardUI} from './Component/CardUI'
import {getDatabase} from "./Component/getCard"
import {encode, decode} from "http://www.peter-eigenschink.at/projects/steganographyjs/"

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
        {getDatabase}
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
