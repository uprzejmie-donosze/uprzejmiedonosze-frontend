import React, { useEffect } from "react";
import { useLocalStorage } from "react-use";
import { DateTime } from "luxon";
import { Images } from "./components/Images";
import { Location } from "./components/Location";
import { Categories } from "./components/Categories";
import { useAppDispatch, useAppSelector } from "../../store";
import { createReport, getOrCreateReport } from "../../store/report";
import { Datetime } from "./components/Datetime";
import { CarPlates } from "./components/CarePlates";
import * as S from "./styles";

const NEW_FORM_ID = "app-id";

function FormNew() {
  const dispatch = useAppDispatch();
  const formDate = useAppSelector((state) => state.report.appData?.added || "");
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
    <S.FormContainer>
      {!!value && (
        <S.FormInfo>
          <p>Edycja zgłoszenia</p>
          <span>
            {`Edytujesz zgłoszenie powstałe ${DateTime.fromISO(
              formDate,
            ).toFormat("yyyy-LL-dd'T'HH:mm")}.
            Jeśli chcesz zacząć od nowa`}
            &nbsp;
          </span>
          <strong onClick={registerNewReport}>kliknij tutaj</strong>.
        </S.FormInfo>
      )}
      <form>
        <Images />

        <S.FormRow>
          <CarPlates />
          <Datetime />
        </S.FormRow>

        <Location />
        <Categories />
      </form>
    </S.FormContainer>
  );
}

export default FormNew;
