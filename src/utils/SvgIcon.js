import React from 'react';
import PropTypes from 'prop-types';

const SvgIcon = (props) => {
  const {
    children,
    classes,
    nativeColor,
    titleAccess,
    viewBox,
    ...other
  } = props;

  return (
    <svg
      focusable="false"
      viewBox={viewBox}
      fill={nativeColor ? nativeColor : 'currentColor'}
      aria-hidden={titleAccess ? 'false' : 'true'}
      {...other}
    >
      {titleAccess ? <title>{titleAccess}</title> : null}
      {children}
    </svg>
  );
};

SvgIcon.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
  nativeColor: PropTypes.string,
  titleAccess: PropTypes.string,
  viewBox: PropTypes.string
};

export default SvgIcon;
