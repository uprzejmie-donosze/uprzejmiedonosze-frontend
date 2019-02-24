import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as F from '../FormComponents/styles';

class TextField extends Component {
  state = { hasError: false }

  handleValidation() {
    const { hasError } = this.props;
    this.setState({ hasError: hasError });
  }

  componentDidUpdate(prevProps) {
    if (this.props.hasError !== prevProps.hasError) {
      this.setState({ hasError: this.props.hasError });
    }
  }

  render() {
    const { hasError, errorMessage, text, placeholder, value, id, onChange } = this.props;

    return (
      <F.Field>
        <F.Label htmlFor={id}>{text}</F.Label>

        <F.Input
          type="text"
          id={id}
          defaultValue={this.props.value}
          onChange={e => onChange(e.target.value)}
          onBlur={() => this.handleValidation()}
        />

        {this.state.hasError && <F.ErrorMessage>{errorMessage}</F.ErrorMessage>}
      </F.Field>
    );
  };
};

TextField.defaultProps = {
  value: ''
};

TextField.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  onChange: PropTypes.func,
};

export default TextField;
