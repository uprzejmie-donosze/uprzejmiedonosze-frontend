import React from "react";
import { stringRequired } from "../../Form/validation";
import { InputField } from "../../Form";
import { FormColumn } from "../styles";

export function CarPlates() {
  return (
    <FormColumn>
      <InputField
        handleChange={() => console.log("hello")}
        contentData={{
          placeholder: "numer rejestracyjny",
          id: "carPlate",
          type: "text",
          label: "Podaj numer rejestracyjny",
          name: "carPlate",
          validate: stringRequired,
        }}
      />
    </FormColumn>
  );
}
