import React from "react";
import { InputField } from "../Form";
import { stringRequired } from "../Form/validation";
import { Images } from "./components/Images";
import { Location } from "./components/Location";
import * as S from "./styles";
import { Categories } from "./components/Categories";
import { useAppSelector } from "../../store";

function FormNew() {
  const datetime = useAppSelector((state) => state.report.datetime.value);
  return (
    <form>
      <Images />

      <S.FormRow>
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
        <InputField
          handleChange={() => console.log("hello")}
          contentData={{
            defaultValue: datetime,
            id: "datetime",
            type: "datetime-local",
            label: "Data i czas zgłoszenia",
            name: "datetime",
            validate: stringRequired,
          }}
        />
      </S.FormRow>

      <Location />

      <Categories />
    </form>
  );
}

export default FormNew;