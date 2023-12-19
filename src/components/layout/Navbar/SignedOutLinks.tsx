import React from 'react';

import CommonLinks, { ExternalLinkFB, ExternalLinkRPO } from './CommonLinks';

function SignedOutLinks({ closeNav }: { closeNav: () => void }){
  return (
    <>
      <CommonLinks closeNav={closeNav} />

      <ExternalLinkFB />

      <ExternalLinkRPO />
    </>
  );
};

export default SignedOutLinks;
