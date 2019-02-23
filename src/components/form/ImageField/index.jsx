import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageField extends Component {
  state = {
    value: ''
  }

  render() {
    const { onChange, image, errorMessage, text, placeholder, id } = this.props;
    const imgSrc = image ? image : placeholder;

    return (
      <div style={{padding: '1rem 0', maxWidth: '300px'}}>
        <p>{text}</p>
        <label htmlFor={id}><img src={imgSrc} /></label>

        <input
          id={id}
          type="file"
          accept="image/jpeg"
          onChange={(e) => onChange(e.target.files[0])}
        />

        {errorMessage && <span>{errorMessage}</span>}
      </div>
    );
  };
};

ImageField.defaultProps = {
  image: '',
  errorMessage: null
};

ImageField.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  image: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default ImageField;
