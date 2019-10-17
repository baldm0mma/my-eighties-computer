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
    this.state = {
      content: ''
    };
  }

  handleChange = e => {
    const content = e.target.value;
    this.setState({ content });
  };

  render = () => {
    const { label, type, placeholder } = this.props;
    return (
      <label>
        {label}:
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
  placeholder: PropTypes.string,
};

// Button
export const My80sButton = ({ text, className="", ...props }) => {
  return <button className={"80s-button " + className} {...props}>{text}</button>;
};
