import React, { useState } from 'react';

import FormNew from '../components/report/FormNew';
import FormConfirm from '../components/report/FormConfirm';

import { Container, colors } from '../styles';
import { withAuth } from '../config';

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
        <span style={{color: stage === STAGES.new ? colors.secondary : colors.border}}>New report &gt; </span>
        <span style={{color: stage === STAGES.confirm ? colors.secondary : colors.border}}>Confirm &gt; </span>
        <span style={{color: stage === STAGES.success ? colors.secondary : colors.border}}>Confirmation</span>
      </div>

      {stage === STAGES.new && <FormNew />}
      {stage === STAGES.confirm && <FormConfirm />}
      {stage === STAGES.success && <div>success</div>}

      <div style={{ display: "flex", justifyContent: "space-between", position: "fixed", width: "calc(100% - 300px)", left: '300px', bottom: '0', padding: "1rem", background: "white"}}>
        <button style={{background: 'white'}} onClick={handlePrev}>back</button>
        <button style={{background: 'white'}} onClick={handleNext}>next</button>
      </div>
    </Container>
  );
};

export default withAuth(Report);
