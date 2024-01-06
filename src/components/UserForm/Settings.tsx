import React from "react";
import * as S from "./styles";
import { RadioInputField } from "../Form";
import {
  ADDRESS_PERM_OPTIONS,
  POLICE_TYPE_OPTIONS,
  REPORTS_CONUT_OPTIONS,
} from "./variables";

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

        <S.Field>
          <RadioInputField
            handleChange={onChange}
            contentData={{
              selected: addressPermSelected === ADDRESS_PERM_OPTIONS.yes,
              id: "address-permission-yes",
              label:
                "Tak, chcę utrudnić sprawcy wykroczenia poznanie mojego adresu (domyślnie).",
              name: "addressPerm",
              value: ADDRESS_PERM_OPTIONS.yes,
            }}
          />
        </S.Field>

        <S.Field>
          <RadioInputField
            handleChange={onChange}
            contentData={{
              selected: addressPermSelected === ADDRESS_PERM_OPTIONS.no,
              id: "address-permission-no",
              label: "Nie, mój adres i tak łatwo znaleźć w sieci.",
              name: "addressPerm",
              value: ADDRESS_PERM_OPTIONS.no,
            }}
          />
        </S.Field>
      </S.Options>

      <S.Options>
        <S.TextHint>Chcę wysyłać swoje zgłoszenia</S.TextHint>

        <S.Field>
          <RadioInputField
            handleChange={onChange}
            contentData={{
              selected: policeTypeSelected === POLICE_TYPE_OPTIONS.sm,
              id: "send-to-minuciple-police",
              label:
                "do Straży Miejskiej/Gminnej właściwej dla miejscowości zgłoszenia (domyślnie)",
              name: "policeType",
              value: POLICE_TYPE_OPTIONS.sm,
            }}
          />
        </S.Field>

        <S.Field>
          <RadioInputField
            handleChange={onChange}
            contentData={{
              selected: policeTypeSelected === POLICE_TYPE_OPTIONS.sa,
              id: "send-to-police",
              label:
                "na komendę Policji właściwą dla województwa zgłoszenia (eksperymentalnie)",
              name: "policeType",
              value: POLICE_TYPE_OPTIONS.sa,
            }}
          />
        </S.Field>
      </S.Options>

      <S.Options>
        <S.TextHint>
          Liczba zgłoszeń ładowana na start w &quot;Zgłoszenia&quot;
        </S.TextHint>

        <S.Field>
          <RadioInputField
            handleChange={onChange}
            contentData={{
              id: "initial-reports-count-200",
              selected: reportsCountSelected === REPORTS_CONUT_OPTIONS["200"],
              label: "200 (domyślnie)",
              name: "reportsCount",
              value: REPORTS_CONUT_OPTIONS["200"],
            }}
          />
        </S.Field>

        <S.Field>
          <RadioInputField
            handleChange={onChange}
            contentData={{
              id: "initial-reports-count-50",
              selected: reportsCountSelected === REPORTS_CONUT_OPTIONS["50"],
              label: "50, dobre na starszych telefonach i słabej sieci",
              name: "reportsCount",
              value: REPORTS_CONUT_OPTIONS["50"],
            }}
          />
        </S.Field>
      </S.Options>
    </S.Fieldset>
  );
}
