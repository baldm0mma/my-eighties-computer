import React, { Component } from 'react';

import {
  My80sH1,
  My80sPText,
  My80sAccCreateModal,
  My80sAccLoginModal
} from 'my-eighties-computer';

export default class App extends Component {
  render() {
    return (
      <div className='example-container'>
        <My80sH1 text='This is your badass 80s header text' />
        <My80sPText text='This is your badass 80s basic paragraph text' />
        <br />
        <My80sAccCreateModal
          text='This is your badass 80s account creation modal'
          onSubmit={content => console.log(content)}
        />
        <br />
        <br />
        <My80sAccLoginModal
          text='This is your badass 80s account creation modal'
          onSubmit={content => console.log(content)}
        />
        <br />
        <br />
      </div>
    );
  }
}
