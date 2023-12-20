import React, { ReactElement, useState } from "react";

import { Input } from "./Input";
import * as S from "./styles";

type Validator = (value: any, allValues?: any, props?: any, name?: any) => any;

type Props = {
  handleChange: (v: string) => void;
  contentData: {
    placeholder: string;
    id: string;
    type: string;
    label: string;
    name: string;
    icon?: ReactElement;
    disabled?: boolean;
    validate?: Validator;
  };
};

export function InputField({ handleChange, contentData }: Props) {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);
  const { placeholder, id, type, label, icon, name, disabled } = contentData;

  const handleInputChange = (e: InputEvent) => {
    if (!!contentData.validate) {
      const err = contentData.validate(
        (e.target as HTMLInputElement).value || null,
      );
      setError(err);
    }
    handleChange((e.target as HTMLInputElement).value);
    setValue((e.target as HTMLInputElement).value);
    setTouched(true);
  };

  const inputData = { onChange: handleInputChange, value, disabled };
  const meta = { touched, valid: !!value && !error, error: error };
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
