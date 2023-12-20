import React, { ReactNode } from "react";

import { Field } from "./Field";
import * as S from "./styles";

type Props = {
  id: string;
  label: string;
  input: {
    onChange: (e: InputEvent) => void;
    value: string;
    disabled?: boolean;
  };
  meta: {
    touched: boolean;
    valid: boolean;
    error: string | null;
  };
  type: string;
  placeholder: string;
  children: ReactNode;
  name: string;
};

export function Input({
  input,
  meta,
  label,
  id,
  type,
  placeholder,
  name,
  children,
}: Props) {
  return (
    <Field label={label} id={id} meta={meta}>
      <S.FieldInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        {...meta}
        disabled={input.disabled || false}
        isValid={meta.touched && meta.valid && !!input.value}
        hasIcon={!!children}
      />
      {children}
    </Field>
  );
}
