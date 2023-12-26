import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { Toast } from "./styles";
import { cleanError } from "../../store/follback/follbackActions";

export function Follback() {
  const { error } = useAppSelector((state) => state.follback);
  const dispatch = useAppDispatch();

  function close() {
    dispatch(cleanError());
  }

  return <ErrorToast errorMsg={error} close={close} />;
}

function ErrorToast({
  errorMsg,
  close,
}: {
  errorMsg: string | null;
  close: () => void;
}) {
  useEffect(() => {
    let timeout: NodeJS.Timeout = null;
    if (errorMsg && !timeout) timeout = setTimeout(close, 5000);
    return () => timeout && clearTimeout(timeout);
  }, [errorMsg]);

  return (
    <Toast data-active={!!errorMsg}>
      <div className="content">
        <div className="message">
          <span className="title">Error</span>
          <span className="text">{errorMsg}</span>
        </div>
      </div>

      <button className="close" onClick={close}>
        ❌
      </button>
      <div className="progress"></div>
    </Toast>
  );
}
