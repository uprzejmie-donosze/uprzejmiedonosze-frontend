import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { Images } from "./components/Images";
import { Location } from "./components/Location";
import { Categories } from "./components/Categories";
import { Datetime } from "./components/Datetime";
import { CarPlates } from "./components/CarePlates";
import { useAppSelector } from "../../store";
import { FormNav } from "./components/Nav";
import { Button } from "../../styles";
import * as S from "./styles";

type Props = {
  newReport: () => void;
  create: () => void;
};

function FormNew({ newReport, create }: Props) {
  const { carImageThumb, contextImageThumb } = useAppSelector(
    (state) => state.report.app,
  );
  const disabled = useAppSelector((state) => state.report.form.disabled);
  const [showEditInfo, setShowEditInfo] = useState<boolean>(false);

  function handleSubmit() {
    if (disabled) return;
    create();
  }

  useEffect(() => {
    setShowEditInfo(!!carImageThumb || !!contextImageThumb);
  }, []);

  return (
    <>
      <S.FormContainer>
        {showEditInfo && <EditInfo action={newReport} />}

        <form>
          <Images />

          <S.FormRow>
            <Datetime />
            <CarPlates />
          </S.FormRow>

          <Location />
          <Categories />
        </form>
      </S.FormContainer>

      <FormNav>
        <Button disabled={disabled} onClick={handleSubmit}>
          dalej
        </Button>
      </FormNav>
    </>
  );
}

function EditInfo({ action }: { action: () => void }) {
  const createdAt = useAppSelector((state) => state.report.app.added);

  return (
    <S.FormInfo>
      <p>Edycja zgłoszenia</p>
      <span>
        {`Edytujesz zgłoszenie powstałe ${DateTime.fromISO(createdAt).toFormat(
          "yyyy-LL-dd', 'HH:mm",
        )}. Jeśli chcesz zacząć od nowa,`}
        &nbsp;
      </span>
      <strong onClick={action}>kliknij tutaj</strong>.
    </S.FormInfo>
  );
}

export default FormNew;
