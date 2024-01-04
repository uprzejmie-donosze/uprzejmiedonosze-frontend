import React from "react";
import { InputField } from "../../Form";
import { stringRequired } from "../../Form/validation";
import { FormColumn } from "../styles";
import { FieldContainer, Map, MapContainer } from "./styles";

export function Location() {
  return (
    <MapContainer>
      <FormColumn>
        <Map src="/assets/images/map_prev.png" />
      </FormColumn>
      <FieldContainer>
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
      </FieldContainer>
    </MapContainer>
  );
}
