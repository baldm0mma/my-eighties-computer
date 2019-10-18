import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

// H1
export const My80sH1 = ({ text }) => {
  return <h1 className={styles.my80sH1}>{text}</h1>;
};

My80sH1.propTypes = {
  text: PropTypes.string
};

// Simple paragraph text
export const My80sPText = ({ text }) => {
  return <p className={styles.my80sPText}>{text}</p>;
};

My80sPText.propTypes = {
  text: PropTypes.string
};

// Input
export class My80sLogin extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }

  handleChange = e => {
    const content = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: content });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
    this.setState({ username: '', email: '', password: '' });
  };

  render = () => {
    const { text } = this.props;
    return (
      <form className={styles.my80sLogin}>
        <h3 className={styles.my80sH3}>{text}</h3>
        <div className={styles.form__label__container}>
          <label className={styles.my80sLabel}>
            Username:
            <br />
            <input
              className={styles.my80sInput}
              name='username'
              onChange={this.handleChange}
              placeholder='Username'
              type='text'
              value={this.state.username}
            />
          </label>
        </div>

        <div className={styles.form__label__container}>
          <label className={styles.my80sLabel}>
            Email:
            <br />
            <input
              className={styles.my80sInput}
              name='email'
              onChange={this.handleChange}
              placeholder='Email address'
              type='text'
              value={this.state.email}
            />
          </label>
        </div>

        <div className={styles.form__label__container}>
          <label className={styles.my80sLabel}>
            Password:
            <br />
            <input
              className={styles.my80sInput}
              name='password'
              onChange={this.handleChange}
              placeholder='Password'
              type='text'
              value={this.state.password}
            />
          </label>
        </div>

        <div>
          <input
            className={styles.my80sButton}
            onClick={this.handleSubmit}
            type='button'
            value='Submit'
          />
        </div>
      </form>
    );
  };
}

My80sLogin.propTypes = {
  onSubmit: PropTypes.func
};
