import React, { Component } from 'react';

import { My80sH1, My80sPText } from 'my-eighties-computer';

export default class App extends Component {
  render() {
    return (
      <div className='example-container'>
        <My80sH1 text='You can pass props through this header component' />
        <My80sPText text='You can pass props through this simple text component' />
      </div>
    );
  }
}
