import React, { Component } from 'react';
import PropTypes from 'prop-types';
import googleMapsConfig from '../../../config/googleMapsConfig';

import * as F from '../FormComponents/styles';

class AddressField extends Component {
  autocompleteRef = React.createRef();

  componentDidUpdate(prevProps) {
    const { places } = this.props;
    if (places !== prevProps.places) places(this.autocompleteRef.current);
  };

  render() {
    const { errorMessage, text, placeholder, value, id } = this.props;

    return (
      <F.Field style={{padding: '1rem 0'}}>
        <F.Label htmlFor={id}>{text}</F.Label>

        <F.Input
          type="text"
          id={id}
          defaultValue={this.props.value}
          ref={this.autocompleteRef}
        />

        {errorMessage && <F.ErrorMessage>{errorMessage}</F.ErrorMessage>}
      </F.Field>
    );
  };
};

AddressField.defaultProps = {
  value: ''
};

AddressField.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  places: PropTypes.func,
  errorMessage: PropTypes.string,
};

export default AddressField;
