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
        {new CardUI("https://i.pinimg.com/564x/5c/47/1b/5c471b5d08e9e5a66a2a622185712ca2.jpg", "qualquer coisa")}
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
