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
import { LinearLoader } from "../Loader";

const NEW_FORM_ID = "app-id";

function FormNew() {
  const dispatch = useAppDispatch();
  const { loaded, loading, added, carImageThumb, contextImageThumb } =
    useAppSelector((state) => state.report.app);
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

  if (loading) {
    return <LinearLoader />;
  }

  if (!loaded) {
    return <>Problem z załadowaniem formularza</>;
  }

  const showEditInfo = !!carImageThumb || !!contextImageThumb;

  return (
    <S.FormContainer>
      {showEditInfo && (
        <S.FormInfo>
          <p>Edycja zgłoszenia</p>
          <span>
            {`Edytujesz zgłoszenie powstałe ${DateTime.fromISO(added).toFormat(
              "yyyy-LL-dd'T'HH:mm",
            )}.
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
