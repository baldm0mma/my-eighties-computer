import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

// H1
export const My80sH1 = ({ text }) => {
  return <h1>{text}</h1>;
};

My80sH1.propTypes = {
  text: PropTypes.string
};

// Simple paragraph text
export const My80sPText = ({ text }) => {
  return <p>{text}</p>;
};

My80sPText.propTypes = {
  text: PropTypes.string
};

// Input
export class My80sInput extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = e => {
    const content = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: content });
  };

  render = () => {
    const { label, type, placeholder, labelTop } = this.props;
    return (
      <label>
        {label}:{labelTop && <br />}
        <input
          type={type}
          name={label}
          placeholder={placeholder}
          value={this.state.content}
          onChange={this.handleChange}
        />
      </label>
    );
  };
}

My80sInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
};

// Button
export const My80sButton = ({ text, className = '', onClick }) => {
  return (
    <button className={'my-80s-button ' + className} onClick={onClick}>
      {text}
    </button>
  );
};

My80sButton.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};
