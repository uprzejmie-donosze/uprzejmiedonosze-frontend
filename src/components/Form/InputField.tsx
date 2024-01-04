import React, { ReactElement, useState } from "react";

import { Input } from "./Input";
import * as S from "./styles";

type Validator = (value: any, allValues?: any, props?: any, name?: any) => any;

type Props = {
  handleChange: ({
    name,
    value,
    valid,
  }: {
    name: string;
    value: string;
    valid: boolean;
  }) => void;
  contentData: {
    placeholder?: string;
    id: string;
    type: string;
    label: string;
    name: string;
    icon?: ReactElement;
    disabled?: boolean;
    validate?: Validator;
    defaultValue?: string;
  };
};

export function InputField({ handleChange, contentData }: Props) {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);
  const { placeholder, id, type, label, icon, name, disabled, defaultValue } =
    contentData;

  const handleInputChange = (e: InputEvent) => {
    const err = validate((e.target as HTMLInputElement).value);
    handleChange({
      value: (e.target as HTMLInputElement).value,
      valid: !err,
      name: contentData.name,
    });
    setValue((e.target as HTMLInputElement).value);
    setTouched(true);
  };

  function validate(value: string): string | null {
    let err = null;
    if (!!contentData.validate) {
      err = contentData.validate(value || null);
      setError(err);
    }
    return err;
  }

  const inputData = { onChange: handleInputChange, value, disabled };
  const meta = {
    touched,
    valid: (!!value || !!defaultValue) && !error,
    error: error,
  };
  return (
    <Input
      input={inputData}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      label={label}
      meta={meta}
      defaultValue={defaultValue}
    >
      {icon && <S.FieldIcon data-value={!!value}>{icon}</S.FieldIcon>}
    </Input>
  );
}
