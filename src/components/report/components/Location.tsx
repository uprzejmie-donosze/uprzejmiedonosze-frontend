import React from "react";
import { InputField } from "../../Form";
import { stringRequired } from "../../Form/validation";
import { FormRow } from "../styles";

export function Location() {
  return (
    <FormRow>
      <div>mapa</div>
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
    </FormRow>
  );
}
