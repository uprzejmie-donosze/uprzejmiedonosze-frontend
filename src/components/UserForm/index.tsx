import React from "react";
import { useAppSelector } from "../../store";
import { Button } from "../../styles";
import { InputField } from "../Form";

export function UserForm() {
  const user = useAppSelector((state) => state.user);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  function handleChange() {}

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Dane kontaktowe</legend>
          <small>
            Aby dokonać zgłoszenia musisz podać swoje imię, nazwisko, adres
            e-mail oraz adres korespondencyjny. Jest to minimalny zestaw
            informacji jakich wymaga SM do przyjęcia zgłoszenia.
          </small>

          <InputField
            handleChange={handleChange}
            contentData={{
              placeholder: "John Doe",
              id: "name",
              type: "text",
              label: "Imię i nazwisko",
              name: "name",
            }}
          />

          <InputField
            handleChange={handleChange}
            contentData={{
              placeholder: user.profile.data.email,
              disabled: true,
              id: "email",
              type: "text",
              label: "E-mail",
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
            }}
          />
        </fieldset>

        <fieldset>
          <legend>Ustawienia</legend>

          <div>
            <div>
              <p>
                Czy chcesz dołączać do zgłoszenia prośbę o niezamieszczanie w
                protokole danych dotyczących swojego miejsca zamieszkania?
              </p>

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
            </div>

            <div>
              <p>Chcę wysyłać swoje zgłoszenia</p>

              <InputField
                handleChange={handleChange}
                contentData={{
                  placeholder: String(user.profile.data.number),
                  id: "send-to-minuciple-police",
                  type: "radio",
                  label: "Straży Miejskiej",
                  name: "send-to-minuciple-police",
                }}
              />

              <InputField
                handleChange={handleChange}
                contentData={{
                  placeholder: String(user.profile.data.number),
                  id: "send-to-police",
                  type: "radio",
                  label: "Policji",
                  name: "send-to-police",
                }}
              />
            </div>

            <div>
              <p>Liczba zgłoszeń ładowana na start w "Moje zgłoszenia"</p>

              <InputField
                handleChange={handleChange}
                contentData={{
                  placeholder: String(user.profile.data.number),
                  id: "initial-reports-count-50",
                  type: "radio",
                  label: "50",
                  name: "initial-reports-count-50",
                }}
              />

              <InputField
                handleChange={handleChange}
                contentData={{
                  placeholder: String(user.profile.data.number),
                  id: "initial-reports-count-200",
                  type: "radio",
                  label: "200",
                  name: "initial-reports-count-200",
                }}
              />
            </div>
          </div>
        </fieldset>

        <Button type="submit">potwierdź</Button>
      </form>
    </section>
  );
}
