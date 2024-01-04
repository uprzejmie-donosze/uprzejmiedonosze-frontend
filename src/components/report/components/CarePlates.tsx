import React from "react";
import { stringRequired } from "../../Form/validation";
import { InputField } from "../../Form";
import { FormColumn } from "../styles";
import { CarPlateContainer, CarPlateImage, CarPlatePrev } from "./styles";
import { useAppSelector } from "../../../store";
import { IMAGE_HOST } from "../../../constants";

export function CarPlates() {
  const { plateImage, plateIdFromImage } = useAppSelector(
    (state) => state.report.app,
  );

  return (
    <FormColumn>
      <CarPlateContainer>
        <InputField
          handleChange={() => console.log("hello")}
          contentData={{
            defaultValue: plateIdFromImage || "",
            placeholder: "numer rejestracyjny",
            id: "carPlate",
            type: "text",
            label: "Podaj numer rejestracyjny",
            name: "carPlate",
            validate: stringRequired,
          }}
        />
        <CarPlatePrev>
          {plateImage ? (
            <CarPlateImage src={`${IMAGE_HOST}${plateImage}`} />
          ) : (
            "brak podglądu tablicy"
          )}
        </CarPlatePrev>
      </CarPlateContainer>
    </FormColumn>
  );
}
