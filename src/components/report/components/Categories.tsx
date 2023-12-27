import React, { ReactElement } from "react";
import { RadioInputField } from "../../Form";
import { Link } from "@reach/router";
import { ROUTES } from "../../../config";
import * as S from "./../styles";

export function Categories() {
  return (
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
