import React from 'react';
import PropTypes from 'prop-types';

import CommonLinks, { ExternalLinkFB, ExternalLinkRPO } from './CommonLinks';

function SignedOutLinks({ closeNav }){
  return (
    <>
      <CommonLinks closeNav={closeNav} />

      <ExternalLinkFB />

      <ExternalLinkRPO />
    </>
  );
};

SignedOutLinks.propTypes = {
  closeNav: PropTypes.func
};

export default SignedOutLinks;
