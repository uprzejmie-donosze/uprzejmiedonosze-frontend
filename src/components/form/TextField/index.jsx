import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from "lodash.debounce";

import * as F from '../FormComponents/styles';

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.emitChangeDebounced = debounce(this.emitChange, 400);
  }

  handleChange = event => this.emitChangeDebounced(event.target.value);

  emitChange = value => {
    if (value !== "") {
      this.props.onChange(value);
    }
  };

  handleValidation() {
    const { hasError } = this.props;
    this.setState({ hasError: hasError });
  }

  componentDidUpdate(prevProps) {
    if (this.props.hasError !== prevProps.hasError) {
      this.setState({ hasError: this.props.hasError });
    }
  }

  componentWillUnmount() {
    this.emitChangeDebounced.cancel();
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
          onChange={this.handleChange}
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
