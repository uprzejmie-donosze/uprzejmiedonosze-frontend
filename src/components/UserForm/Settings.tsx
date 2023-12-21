import React from "react";
import { InputField } from "../Form";
import * as S from "./styles";

type Props = {
  onChange: ({
    name,
    value,
    valid,
  }: {
    name: string;
    value: string;
    valid: boolean;
  }) => void;
};

export function Settings({ onChange }: Props) {
  return (
    <S.Fieldset>
      <S.Legend>Ustawienia</S.Legend>
      <S.Options>
        <S.TextHint>
          Czy chcesz dołączać do zgłoszenia prośbę o niezamieszczanie w
          protokole danych dotyczących swojego miejsca zamieszkania?
        </S.TextHint>

        <InputField
          handleChange={onChange}
          contentData={{
            placeholder: "",
            id: "address-permission-yes",
            type: "radio",
            label: "Tak, ...",
            name: "address-permission-yes",
          }}
        />

        <InputField
          handleChange={onChange}
          contentData={{
            placeholder: "",
            id: "address-permission-no",
            type: "radio",
            label: "Nie, ...",
            name: "address-permission-no",
          }}
        />
      </S.Options>

      <S.Options>
        <S.TextHint>Chcę wysyłać swoje zgłoszenia</S.TextHint>

        <InputField
          handleChange={onChange}
          contentData={{
            id: "send-to-minuciple-police",
            type: "radio",
            label:
              "do Straży Miejskiej/Gminnej właściwej dla miejscowości zgłoszenia (domyślnie)",
            name: "send-to-minuciple-police",
          }}
        />

        <InputField
          handleChange={onChange}
          contentData={{
            id: "send-to-police",
            type: "radio",
            label:
              "na komendę Policji właściwą dla województwa zgłoszenia (eksperymentalnie)",
            name: "send-to-police",
          }}
        />
      </S.Options>

      <S.Options>
        <S.TextHint>
          Liczba zgłoszeń ładowana na start w "Zgłoszenia"
        </S.TextHint>

        <InputField
          handleChange={onChange}
          contentData={{
            id: "initial-reports-count-50",
            type: "radio",
            label: "50, dobre na starszych telefonach i słabej sieci",
            name: "initial-reports-count-50",
          }}
        />

        <InputField
          handleChange={onChange}
          contentData={{
            id: "initial-reports-count-200",
            type: "radio",
            label: "200 (domyślnie)",
            name: "initial-reports-count-200",
          }}
        />
      </S.Options>
    </S.Fieldset>
  );
}
