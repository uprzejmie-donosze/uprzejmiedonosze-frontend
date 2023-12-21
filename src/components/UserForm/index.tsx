import React, { useState } from "react";
import { useAppSelector } from "../../store";
import { Button } from "../../styles";
import { InputField } from "../Form";
import { stringRequired } from "../Form/validation";
import * as S from "./styles";

export function UserForm() {
  const user = useAppSelector((state) => state.user);
  const [userState, setUserState] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [settings, setSettings] = useState({
    policeType: "",
    reportsCount: 0,
    addressPerm: "",
  });

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log("click");
  }

  function handleChange(v: string) {
    console.log(v);
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <S.FormContent>
          <S.Fieldset>
            <S.Legend>Dane kontaktowe</S.Legend>
            <S.TextHint>
              Aby dokonać zgłoszenia musisz podać swoje imię, nazwisko, adres
              e-mail oraz adres korespondencyjny. Jest to minimalny zestaw
              informacji jakich wymaga SM do przyjęcia zgłoszenia.
            </S.TextHint>

            <InputField
              handleChange={handleChange}
              contentData={{
                placeholder: "John Doe",
                id: "name",
                type: "text",
                label: "Imię i nazwisko",
                name: "name",
                validate: stringRequired,
              }}
            />

            <InputField
              handleChange={handleChange}
              contentData={{
                placeholder: user.profile.data.email,
                disabled: true,
                id: "email",
                type: "text",
                label: "E-mail (edycja niemożliwa)",
                name: "email",
              }}
            />

            <InputField
              handleChange={handleChange}
              contentData={{
                placeholder: user.profile.data.address,
                id: "address",
                type: "text",
                label: "Adres zamieszkania",
                name: "address",
                validate: stringRequired,
              }}
            />

            <InputField
              handleChange={handleChange}
              contentData={{
                placeholder: String(user.profile.data.number),
                id: "phone",
                type: "text",
                label: "Telefon kontaktowy",
                name: "v",
                validate: stringRequired,
              }}
            />
          </S.Fieldset>

          {user.isRegistered && (
            <S.Fieldset>
              <S.Legend>Ustawienia</S.Legend>
              <S.Options>
                <S.TextHint>
                  Czy chcesz dołączać do zgłoszenia prośbę o niezamieszczanie w
                  protokole danych dotyczących swojego miejsca zamieszkania?
                </S.TextHint>

                <InputField
                  handleChange={handleChange}
                  contentData={{
                    placeholder: "",
                    id: "address-permission-yes",
                    type: "radio",
                    label: "Tak, ...",
                    name: "address-permission-yes",
                  }}
                />

                <InputField
                  handleChange={handleChange}
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
                  handleChange={handleChange}
                  contentData={{
                    placeholder: String(user.profile.data.number),
                    id: "send-to-minuciple-police",
                    type: "radio",
                    label:
                      "do Straży Miejskiej/Gminnej właściwej dla miejscowości zgłoszenia (domyślnie)",
                    name: "send-to-minuciple-police",
                  }}
                />

                <InputField
                  handleChange={handleChange}
                  contentData={{
                    placeholder: String(user.profile.data.number),
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
                  handleChange={handleChange}
                  contentData={{
                    placeholder: String(user.profile.data.number),
                    id: "initial-reports-count-50",
                    type: "radio",
                    label: "50, dobre na starszych telefonach i słabej sieci",
                    name: "initial-reports-count-50",
                  }}
                />

                <InputField
                  handleChange={handleChange}
                  contentData={{
                    placeholder: String(user.profile.data.number),
                    id: "initial-reports-count-200",
                    type: "radio",
                    label: "200 (domyślnie)",
                    name: "initial-reports-count-200",
                  }}
                />
              </S.Options>
            </S.Fieldset>
          )}
        </S.FormContent>

        <Button type="submit">potwierdź</Button>
      </form>
    </section>
  );
}
