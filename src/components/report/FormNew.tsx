import React, { ReactElement } from "react";
import { InputField, RadioInputField } from "../Form";
import { stringRequired } from "../Form/validation";
import { Link } from "@reach/router";
import { ROUTES } from "../../config";
import * as S from "./styles";

function FormNew() {
  return (
    <form>
      <S.FormRow>
        <div>
          <label htmlFor="contextImage">
            Wgraj zdjęcie z widocznym wykroczeniem
          </label>
          <input id="contextImage" type="file" accept="image/jpeg" />
        </div>

        <div style={{ padding: "1rem 0" }}>
          <label htmlFor="carImage">
            Wgraj zdjęcie z widoczną tablicą rejestracyjną
          </label>
          <input id="carImage" type="file" accept="image/jpeg" />
        </div>
      </S.FormRow>

      <S.FormRow>
        <InputField
          handleChange={() => console.log("hello")}
          contentData={{
            placeholder: "numer rejestracyjny",
            id: "carPlate",
            type: "text",
            label: "Podaj numer rejestracyjny",
            name: "carPlate",
            validate: stringRequired,
          }}
        />
        <InputField
          handleChange={() => console.log("hello")}
          contentData={{
            id: "datetime",
            type: "datetime-local",
            label: "Data i czas zgłoszenia",
            name: "datetime",
            validate: stringRequired,
          }}
        />
      </S.FormRow>

      <S.FormRow>
        <div>mapa</div>
        <InputField
          handleChange={() => console.log("hello")}
          contentData={{
            id: "location",
            type: "text",
            label: "Podaj adres lub wskaż go na mapie",
            name: "location",
            validate: stringRequired,
          }}
        />
      </S.FormRow>

      <div>
        <p>Wybierz rodzaj naruszenia</p>
        <div>
          <S.FormRow>
            <RadioInputField
              handleChange={() => console.log("hello")}
              contentData={{
                id: "pavement",
                label: (
                  <Category
                    image="/"
                    description="Zastawienie chodnika (mniej niż 1,5 m)"
                    note="Mandat: 100zł"
                  />
                ),
                name: "pavement",
                selected: false,
                value: "pavement",
              }}
            />
            <RadioInputField
              handleChange={() => console.log("hello")}
              contentData={{
                id: "pavement",
                label: (
                  <Category
                    image="/"
                    description="Zastawienie chodnika (mniej niż 1,5 m)"
                    note="Mandat: 100zł"
                  />
                ),
                name: "pavement",
                selected: false,
                value: "pavement",
              }}
            />
          </S.FormRow>
          <S.FormRow>
            <RadioInputField
              handleChange={() => console.log("hello")}
              contentData={{
                id: "pavement",
                label: (
                  <Category
                    image="/"
                    description="Zastawienie chodnika (mniej niż 1,5 m)"
                    note="Mandat: 100zł"
                  />
                ),
                name: "pavement",
                selected: false,
                value: "pavement",
              }}
            />
            <RadioInputField
              handleChange={() => console.log("hello")}
              contentData={{
                id: "pavement",
                label: (
                  <Category
                    image="/"
                    description="Zastawienie chodnika (mniej niż 1,5 m)"
                    note="Mandat: 100zł"
                  />
                ),
                name: "pavement",
                selected: false,
                value: "pavement",
              }}
            />
          </S.FormRow>
          <S.FormRow>
            <RadioInputField
              handleChange={() => console.log("hello")}
              contentData={{
                id: "pavement",
                label: (
                  <Category
                    image="/"
                    description="Zastawienie chodnika (mniej niż 1,5 m)"
                    note="Mandat: 100zł"
                  />
                ),
                name: "pavement",
                selected: true,
                value: "pavement",
              }}
            />
          </S.FormRow>
        </div>

        <p>
          <span>
            Masz wątpliwości którą kategorię wybrać? Przeczytaj nasz&nbsp;
          </span>
          <Link to={ROUTES.regulations}>poradnik</Link>.
        </p>
      </div>
    </form>
  );
}

function Category({
  image,
  description,
  note,
}: {
  image?: string;
  description: string;
  note?: string;
}): ReactElement {
  return (
    <S.Category>
      {image && <S.CategoryImage src={image} />}
      <S.CategoryInfo>
        <span>{description}</span>
        {note && <span>{note}</span>}
      </S.CategoryInfo>
    </S.Category>
  );
}

export default FormNew;
