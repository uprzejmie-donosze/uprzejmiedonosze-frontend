import React from "react";
import { FormRow } from "../styles";

export function Images() {
  return (
    <FormRow>
      <div>
        <label htmlFor="contextImage">
          Wgraj zdjęcie z widocznym wykroczeniem
        </label>
        <input id="contextImage" type="file" accept="image/jpeg" />
      </div>

      <div style={{ padding: "1rem 0" }}>
        <label htmlFor="carImage">
          Wgraj zdjęcie z widoczną tablicą rejestracyjną
        </label>
        <input id="carImage" type="file" accept="image/jpeg" />
      </div>
    </FormRow>
  );
}
