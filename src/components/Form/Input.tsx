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
    <Field label={label} id={id} meta={meta} type={type}>
      <S.InputContainer type={type}>
        <S.FieldInput
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          {...meta}
          onChange={input.onChange}
          disabled={input.disabled || false}
          isValid={meta.touched && meta.valid}
          hasIcon={!!children}
        />
        {type === "radio" && <S.CheckedIndicator />}
      </S.InputContainer>
      {children}
    </Field>
  );
}
