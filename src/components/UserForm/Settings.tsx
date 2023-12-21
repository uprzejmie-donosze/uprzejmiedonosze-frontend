import React from "react";
import * as S from "./styles";
import { RadioInputField } from "../Form";

type Props = {
  addressPermSelected: string;
  policeTypeSelected: string;
  reportsCountSelected: string;
  onChange: (name: string, value: string) => void;
};

export function Settings({
  onChange,
  addressPermSelected,
  policeTypeSelected,
  reportsCountSelected,
}: Props) {
  return (
    <S.Fieldset>
      <S.Legend>Ustawienia</S.Legend>
      <S.Options>
        <S.TextHint>
          Czy chcesz dołączać do zgłoszenia prośbę o niezamieszczanie w
          protokole danych dotyczących swojego miejsca zamieszkania?
        </S.TextHint>

        <RadioInputField
          handleChange={onChange}
          contentData={{
            selected: addressPermSelected === "yes",
            id: "address-permission-yes",
            label: "Tak, ...",
            name: "addressPerm",
            value: "yes",
          }}
        />

        <RadioInputField
          handleChange={onChange}
          contentData={{
            selected: addressPermSelected === "no",
            id: "address-permission-no",
            label: "Nie, ...",
            name: "addressPerm",
            value: "no",
          }}
        />
      </S.Options>

      <S.Options>
        <S.TextHint>Chcę wysyłać swoje zgłoszenia</S.TextHint>

        <RadioInputField
          handleChange={onChange}
          contentData={{
            selected: policeTypeSelected === "municipal",
            id: "send-to-minuciple-police",
            label:
              "do Straży Miejskiej/Gminnej właściwej dla miejscowości zgłoszenia (domyślnie)",
            name: "policeType",
            value: "municipal",
          }}
        />

        <RadioInputField
          handleChange={onChange}
          contentData={{
            selected: policeTypeSelected === "police",
            id: "send-to-police",
            label:
              "na komendę Policji właściwą dla województwa zgłoszenia (eksperymentalnie)",
            name: "policeType",
            value: "police",
          }}
        />
      </S.Options>

      <S.Options>
        <S.TextHint>
          Liczba zgłoszeń ładowana na start w "Zgłoszenia"
        </S.TextHint>

        <RadioInputField
          handleChange={onChange}
          contentData={{
            id: "initial-reports-count-50",
            selected: reportsCountSelected === "50",
            label: "50, dobre na starszych telefonach i słabej sieci",
            name: "reportsCount",
            value: "50",
          }}
        />

        <RadioInputField
          handleChange={onChange}
          contentData={{
            id: "initial-reports-count-200",
            selected: reportsCountSelected === "200",
            label: "200 (domyślnie)",
            name: "reportsCount",
            value: "200",
          }}
        />
      </S.Options>
    </S.Fieldset>
  );
}
