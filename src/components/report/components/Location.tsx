import React from "react";
import { InputField } from "../../Form";
import { stringRequired } from "../../Form/validation";
import { FormColumn, FormRow } from "../styles";

export function Location() {
  return (
    <FormRow>
      <FormColumn>mapa</FormColumn>
      <FormColumn>
        <InputField
          handleChange={() => console.log("hello")}
          contentData={{
            id: "location",
            type: "text",
            label: "Podaj adres lub wskaż go na mapie",
            name: "location",
            validate: stringRequired,
          }}
        />
      </FormColumn>
    </FormRow>
  );
}
