import React, { Component } from 'react';
import PropTypes from 'prop-types';
import googleMapsConfig from '../../../config/googleMapsConfig';

class AddressField extends Component {
  autocompleteRef = React.createRef();

  componentDidUpdate(prevProps) {
    const { places } = this.props;
    if (places !== prevProps.places) places(this.autocompleteRef.current);
  };

  render() {
    const { errorMessage, text, placeholder, value, id } = this.props;

    return (
      <div style={{padding: '1rem 0'}}>
        <label htmlFor={id}>{text}</label>

        <input
          type="text"
          id={id}
          defaultValue={this.props.value}
          ref={this.autocompleteRef}
        />

        {errorMessage && <span>{errorMessage}</span>}
      </div>
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
