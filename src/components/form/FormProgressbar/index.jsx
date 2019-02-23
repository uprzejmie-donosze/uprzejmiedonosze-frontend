import React, { Component } from 'react';
import PropTypes from 'prop-types';

const FormProgressbar = ({ }) => {
  return (
    <div>
      <span style={{color: '#34dd7eff'}}>Nowe zgłoszenie &gt; </span>
      <span style={{color: 'lightgray'}}>Podgląd zgłoszczenia &gt; </span>
      <span style={{color: 'lightgray'}}>Potwierdzenie</span>
    </div>
  );
};

export default FormProgressbar;
