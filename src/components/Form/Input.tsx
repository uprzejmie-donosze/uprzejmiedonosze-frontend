import React, { HTMLInputTypeAttribute, ReactNode } from "react";

import { Field } from "./Field";
import * as S from "./styles";

type InputProps = {
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
  type: HTMLInputTypeAttribute;
  placeholder: string;
  children: ReactNode;
  name: string;
  defaultValue?: string;
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
  defaultValue,
}: InputProps) {
  return (
    <Field label={label} id={id} meta={meta} type={type}>
      <S.FieldInput
        defaultValue={defaultValue}
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
      {children}
    </Field>
  );
}

type RadioInputProps = {
  id: string;
  label: string | ReactNode;
  input: {
    onChange: (e: InputEvent) => void;
    selected: boolean;
    disabled?: boolean;
  };
  meta: {
    touched: boolean;
  };
  type: HTMLInputTypeAttribute;
  placeholder: string;
  name: string;
};

export function RadioInput({
  input,
  meta,
  label,
  id,
  type,
  placeholder,
  name,
}: RadioInputProps) {
  return (
    <Field label={label} id={id} meta={{ ...meta, error: null }} type={type}>
      <S.RadioInputContainer>
        <S.FieldInput
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={input.onChange}
          disabled={input.disabled || false}
          isValid={true}
          hasIcon={false}
          checked={input.selected}
        />
        <S.RadioCheckedIndicator />
      </S.RadioInputContainer>
    </Field>
  );
}
