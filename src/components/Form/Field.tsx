import React, { ReactNode } from "react";

import * as S from "./styles";

type Props = {
  id: string;
  label: string | ReactNode;
  children: ReactNode;
  meta: {
    error: string | null;
    touched: boolean;
  };
  type: string;
};

export function Field({
  label,
  children,
  id,
  meta: { error, touched },
  type,
}: Props) {
  return (
    <S.Field type={type}>
      <S.FieldHeader type={type}>
        {label && <S.FieldLabel htmlFor={id}>{label}</S.FieldLabel>}
        {!!error && touched && <S.FieldError>{error}</S.FieldError>}
      </S.FieldHeader>
      {children}
    </S.Field>
  );
}
