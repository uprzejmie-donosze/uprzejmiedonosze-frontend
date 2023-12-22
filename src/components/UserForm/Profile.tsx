import React from "react";

import * as S from "./styles";
import { InputField } from "../Form";
import { stringRequired } from "../Form/validation";
import { UserProfile } from "../../store/user/types";

type Props = {
  user: UserProfile;
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

export function Profile({ user, onChange }: Props) {
  return (
    <S.Fieldset>
      <S.Legend>Dane kontaktowe</S.Legend>
      <S.TextHint>
        Aby dokonać zgłoszenia musisz podać swoje imię, nazwisko, adres e-mail
        oraz adres korespondencyjny. Jest to minimalny zestaw informacji jakich
        wymaga SM do przyjęcia zgłoszenia.
      </S.TextHint>

      <InputField
        handleChange={onChange}
        contentData={{
          placeholder: "np. Jan Kowalski",
          defaultValue: user.name,
          id: "name",
          type: "text",
          label: "Imię i nazwisko",
          name: "name",
          validate: stringRequired,
        }}
      />

      <InputField
        handleChange={onChange}
        contentData={{
          placeholder: "np. jan@kowalski.pl",
          defaultValue: user.email,
          disabled: true,
          id: "email",
          type: "text",
          label: "E-mail (edycja niemożliwa)",
          name: "email",
        }}
      />

      <InputField
        handleChange={onChange}
        contentData={{
          placeholder: "np. Mickiewicza 4/3, Warszawa",
          defaultValue: user.address,
          id: "address",
          type: "text",
          label: "Adres zamieszkania",
          name: "address",
          validate: stringRequired,
        }}
      />

      <InputField
        handleChange={onChange}
        contentData={{
          placeholder: "np. 666111222",
          defaultValue: user.msisdn,
          id: "phone",
          type: "text",
          label: "Telefon kontaktowy",
          name: "phone",
        }}
      />
    </S.Fieldset>
  );
}
