import React from "react";

import * as S from "./styles";

type Props = {
  id: string;
  label: string;
  input: {
    onChange: () => void;
  };
  meta: {
    error: string;
    touched: boolean;
  };
};

export function Checkbox({ input, label, id, meta }: Props) {
  return (
    <S.FieldFlex type="checkbox">
      {meta.error && meta.touched && (
        <S.FieldErrorFixed>{meta.error}</S.FieldErrorFixed>
      )}
      <S.FieldCheckbox {...input} id={id} {...meta} type="checkbox" />
      <S.FieldCheckboxBox />
      <S.FieldLabelSpaced htmlFor={id}>{label}</S.FieldLabelSpaced>
    </S.FieldFlex>
  );
}
