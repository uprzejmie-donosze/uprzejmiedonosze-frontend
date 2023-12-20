import React, { ReactNode } from "react";

import * as S from "./styles";

type Props = {
  id: string;
  label: string;
  children: ReactNode;
  meta: {
    error: string | null;
    touched: boolean;
  };
};

export function Field({
  label,
  children,
  id,
  meta: { error, touched },
}: Props) {
  return (
    <S.Field>
      <S.FieldHeader>
        {label && <S.FieldLabel htmlFor={id}>{label}</S.FieldLabel>}
        {!!error && touched && <S.FieldError>{error}</S.FieldError>}
      </S.FieldHeader>
      {children}
    </S.Field>
  );
}
