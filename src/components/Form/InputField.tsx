import React, { ReactElement, useState } from "react";

import { Input } from "./Input";
import * as S from "./styles";

type Props = {
  handleChange: (e: InputEvent) => void;
  contentData: {
    placeholder: string;
    id: string;
    type: string;
    label: string;
    name: string;
    icon?: ReactElement;
    disabled?: boolean;
  };
};

export function InputField({ handleChange, contentData }: Props) {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const { placeholder, id, type, label, icon, name, disabled } = contentData;

  const handleInputChange = (e: InputEvent) => {
    handleChange(e);
    setValue((e.target as HTMLInputElement).value);
    setTouched(true);
  };

  const inputData = { onChange: handleInputChange, value, disabled };
  const meta: {
    touched: boolean;
    valid: boolean;
    error: string | null;
  } = { touched, valid: !!value, error: null };

  return (
    <Input
      input={inputData}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      label={label}
      meta={meta}
    >
      {icon && <S.FieldIcon hasValue={!!value}>{icon}</S.FieldIcon>}
    </Input>
  );
}
