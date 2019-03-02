import React from 'react';

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
}

export default SvgIcon;
