import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextAreaField extends Component {
  state = { hasError: false }

  handleValidation() {
    const { hasError } = this.props;
    this.setState({ hasError: hasError });
  }

  render() {
    const { errorMessage, hasError, text, placeholder, value, id, onChange } = this.props;

    return (
      <div style={{padding: '1rem 0'}}>
        <label htmlFor={id}>{text}</label>

        <textarea
          type="text"
          id={id}
          defaultValue={this.props.value}
          onChange={e => onChange(e.target.value)}
          onBlur={() => this.handleValidation()}
        />

        {this.state.hasError && <span>{errorMessage}</span>}
      </div>
    );
  };
};

TextAreaField.defaultProps = {
  value: ''
};

TextAreaField.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  onChange: PropTypes.func,
};

export default TextAreaField;
