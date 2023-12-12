import React, { useState } from 'react';

import FormNew from '../components/report/FormNew';
import FormConfirm from '../components/report/FormConfirm';
import { Container } from '../styles/styledComponents';
import { withAuth } from '../config/auth';

const STAGES = {
  new: "new",
  confirm: "confirm",
  success: "success"
}

function Report() {
  const [stage, setStage] = useState(STAGES.new);

  function handleNext() {
    switch(stage) {
      case STAGES.new:
        setStage(STAGES.confirm)
        return
      case STAGES.confirm:
        setStage(STAGES.success)
        return
      default:
        return
    }
  }

  function handlePrev() {
    switch(stage) {
      case STAGES.success:
        setStage(STAGES.confirm)
        return
      case STAGES.confirm:
        setStage(STAGES.new)
        return
      default:
        return;
    }
  }

  return (
    <Container>
      <div>
        <span style={{color: stage === STAGES.new ? '#34dd7eff' : 'lightgray'}}>New report &gt; </span>
        <span style={{color: stage === STAGES.confirm ? '#34dd7eff' : 'lightgray'}}>Confirm &gt; </span>
        <span style={{color: stage === STAGES.success ? '#34dd7eff' : 'lightgray'}}>Confirmation</span>
      </div>

      {stage === STAGES.new && <FormNew />}
      {stage === STAGES.confirm && <FormConfirm />}
      {stage === STAGES.success && <div>success</div>}

      <div style={{ display: "flex", justifyContent: "space-between", position: "fixed", width: "100%", left: '0', bottom: '0', padding: "1rem", background: "white"}}>
        <button style={{background: 'white'}} onClick={handlePrev}>back</button>
        <button style={{background: 'white'}} onClick={handleNext}>next</button>
      </div>
    </Container>
  );
};

export default withAuth(Report);
