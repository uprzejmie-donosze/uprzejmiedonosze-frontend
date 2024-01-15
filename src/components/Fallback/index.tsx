import React, { useEffect } from "react";
import { Toast, Toasts } from "./styles";
import { cleanError, FallbackError } from "../../store/fallback";
import { useAppDispatch, useAppSelector } from "../../store";

export function Fallback() {
  const { errors } = useAppSelector((state) => state.fallback);
  const dispatch = useAppDispatch();

  function deleteToast(id: string) {
    dispatch(cleanError(id));
  }

  return (
    <Toasts>
      {errors.map((error) => (
        <ErrorToast key={error.id} error={error} deleteToast={deleteToast} />
      ))}
    </Toasts>
  );
}

type Props = {
  error: FallbackError;
  deleteToast: (err: string) => void;
};

function ErrorToast({ error, deleteToast }: Props) {
  function remove() {
    deleteToast(error.id);
  }

  useEffect(() => {
    const timeout = setTimeout(remove, 8000);
    return () => timeout && clearTimeout(timeout);
  }, [error.id]);

  return (
    <Toast data-active={!!error.id}>
      <div className="content">
        <div className="message">
          <span className="title">Błąd!</span>
          <span className="text">{error.msg}</span>
        </div>
      </div>

      <button className="close" onClick={remove}>
        ❌
      </button>
      <div className="progress" />
    </Toast>
  );
}
