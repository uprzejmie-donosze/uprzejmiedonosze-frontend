import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { Toast, Toasts } from "./styles";
import { cleanError } from "../../store/fallback/fallbackActions";

export function Fallback() {
  const { errors } = useAppSelector((state) => state.fallback);
  const dispatch = useAppDispatch();

  function close(err: string) {
    dispatch(cleanError(err));
  }

  return (
    <Toasts>
      {errors.map(error => <ErrorToast errorMsg={error} close={close} />)}
    </Toasts>
  );
}

function ErrorToast({
  errorMsg,
  close,
}: {
  errorMsg: string | null;
  close: (err: string) => void;
}) {
  useEffect(() => {
    if (!errorMsg) return;
    const timeout = setTimeout(remove, 8000);
    return () => timeout && clearTimeout(timeout);
  }, [errorMsg]);

  function remove() {
    close(errorMsg);
  }

  return (
    <Toast data-active={!!errorMsg}>
      <div className="content">
        <div className="message">
          <span className="title">Błąd!</span>
          <span className="text">{errorMsg}</span>
        </div>
      </div>

      <button className="close" onClick={remove}>
        ❌
      </button>
      <div className="progress"></div>
    </Toast>
  );
}
