import React, { useEffect } from "react";
import { useLocalStorage } from "react-use";

import { InputField } from "../Form";
import { stringRequired } from "../Form/validation";
import { Images } from "./components/Images";
import { Location } from "./components/Location";
import { Categories } from "./components/Categories";
import { useAppDispatch, useAppSelector } from "../../store";
import { createReport, getOrCreateReport } from "../../store/report";
import { FormContainer } from "./components/styles";
import * as S from "./styles";

const NEW_FORM_ID = "app-id";

function FormNew() {
  const datetime = useAppSelector((state) => state.report.datetime.value);
  const dispatch = useAppDispatch();
  const [value, setValue] = useLocalStorage<string>(NEW_FORM_ID);

  useEffect(() => {
    if (!!value) {
      dispatch(getOrCreateReport(value, registerNewReport));
      return;
    }
    registerNewReport();
  }, []);

  function registerNewReport() {
    dispatch(createReport(setValue));
  }

  return (
    <FormContainer>
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
    </FormContainer>
  );
}

export default FormNew;
