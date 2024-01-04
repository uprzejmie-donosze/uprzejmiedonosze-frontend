import React, { ReactNode, useState } from "react";

import { RadioInput } from "./Input";

type Props = {
  handleChange: (name: string, value: string) => void;
  contentData: {
    id: string;
    label: string | ReactNode;
    name: string;
    disabled?: boolean;
    selected: boolean;
    value: string;
  };
};

export function RadioInputField({ handleChange, contentData }: Props) {
  const [touched, setTouched] = useState<boolean>(false);
  const { id, label, name, disabled, selected } = contentData;

  const handleInputChange = () => {
    handleChange(contentData.name, contentData.value);
    setTouched(true);
  };

  const inputData = { onChange: handleInputChange, selected, disabled };
  const meta = { touched };
  return (
    <RadioInput
      input={inputData}
      id={id}
      name={name}
      type={"radio"}
      placeholder={""}
      label={label}
      meta={meta}
    />
  );
}
