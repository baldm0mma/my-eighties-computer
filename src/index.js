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

// Account creation modal
export class My80sAccCreateModal extends Component {
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
      <form className={styles.my80sCreate}>
        <h3 className={styles.my80sH3}>{text}</h3>
        <div className={styles.form__label__container}>
          <label className={styles.my80sLabel}>
            Username:
            <br />
            <input
              className={styles.my80sInput}
              id='username'
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
              id='email'
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
              id='password'
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
            id='submit-button'
            onClick={this.handleSubmit}
            type='button'
            value='Submit'
          />
        </div>
      </form>
    );
  };
}

My80sAccCreateModal.propTypes = {
  onSubmit: PropTypes.func,
  text: PropTypes.string
};

// Account login modal
export class My80sAccLoginModal extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
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
    this.setState({ username: '', password: '' });
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
              id='username'
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
            Password:
            <br />
            <input
              className={styles.my80sInput}
              id='password'
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
            id='submit-button'
            onClick={this.handleSubmit}
            type='button'
            value='Submit'
          />
        </div>
      </form>
    );
  };
}

My80sAccLoginModal.propTypes = {
  onSubmit: PropTypes.func,
  text: PropTypes.string
};
