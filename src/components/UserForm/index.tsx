import React from "react";
import { useAppSelector } from "../../store";
import { Button } from "../../styles";

export function UserForm() {
  const user = useAppSelector((state) => state.user);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

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

          <div>
            <label htmlFor="name">Imię i nazwisko</label>
            <input id="name" defaultValue={user.profile.data.name} />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input id="email" defaultValue={user.profile.data.email} />
          </div>

          <div>
            <label htmlFor="address">Adres zamieszkania</label>
            <input id="address" defaultValue={user.profile.data.address} />
          </div>

          <div>
            <label htmlFor="phone">Telefon kontaktowy</label>
            <input id="phone" defaultValue={user.profile.data.number} />
          </div>
        </fieldset>

        <fieldset>
          <legend>Ustawienia</legend>

          <div>
            <div>
              <p>
                Czy chcesz dołączać do zgłoszenia prośbę o niezamieszczanie w
                protokole danych dotyczących swojego miejsca zamieszkania?
              </p>

              <div>
                <input type="radio" id="address-permission-yes" />
                <label htmlFor="address-permission-yes">Tak, ...</label>
              </div>

              <div>
                <input type="radio" id="address-permission-no" />
                <label htmlFor="address-permission-no">Nie, ...</label>
              </div>
            </div>

            <div>
              <p>Chcę wysyłać swoje zgłoszenia</p>

              <div>
                <input type="radio" id="send-to-municipal-police" />
                <label htmlFor="send-to-municipal-police">
                  Straży Miejskiej...
                </label>
              </div>

              <div>
                <input type="radio" id="send-to-police" />
                <label htmlFor="send-to-police">Policji...</label>
              </div>
            </div>

            <div>
              <p>Liczba zgłoszeń ładowana na start w "Moje zgłoszenia"</p>

              <div>
                <input type="radio" id="initial-reports-count-200" />
                <label htmlFor="initial-reports-count-200">200</label>
              </div>

              <div>
                <input type="radio" id="initial-reports-count-50" />
                <label htmlFor="initial-reports-count-50">50</label>
              </div>
            </div>
          </div>
        </fieldset>

        <Button type="submit">potwierdź</Button>
      </form>
    </section>
  );
}
