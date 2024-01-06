import React, { ReactElement, useEffect } from "react";
import { Link } from "@reach/router";
import { RadioInputField } from "../../Form";
import { ROUTES } from "../../../config";
import { useAppDispatch, useAppSelector } from "../../../store";
import * as S from "./../styles";
import { LinearLoader } from "../../Loader";
import { getCategories } from "../../../store/categories";
import { IMAGE_HOST } from "../../../constants";
import { setCategory } from "../../../store/report";

export function Categories() {
  const { loading, loaded, categories } = useAppSelector(
    (state) => state.categories,
  );

  const selected = useAppSelector((state) => state.report.form.category.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!categories) {
      dispatch(getCategories());
    }
  }, []);

  if (loading) return <LinearLoader />;
  if (!loaded || !categories) return <p>Problem z załadowaniem danych</p>;

  function handleCategoryChange(
    value: string,
    contextHint: string,
    carHint: string,
  ) {
    dispatch(setCategory(value, contextHint, carHint));
  }

  return (
    <div>
      <S.CategoriesTitle>Wybierz rodzaj naruszenia</S.CategoriesTitle>

      <S.CategoriesGrid>
        {Object.entries(categories).map(([key, value]) => {
          if (!value.title) return;
          return (
            <S.CategoryItem
              key={key}
              title={value.desc}
              selected={selected === key}
            >
              <RadioInputField
                handleChange={() =>
                  handleCategoryChange(
                    key,
                    value.contextImageHint,
                    value.carImageHint,
                  )
                }
                contentData={{
                  id: key,
                  label: (
                    <Category
                      image={`${IMAGE_HOST}/img/${key}.jpg`}
                      description={value.title}
                      note={value.price ? `💰 mandat: ${value.price}` : ""}
                    />
                  ),
                  name: key,
                  selected: selected === key,
                  value: key,
                }}
              />
            </S.CategoryItem>
          );
        })}
      </S.CategoriesGrid>

      <S.CategoriesHint>
        <span>
          Masz wątpliwości którą kategorię wybrać? Przeczytaj nasz&nbsp;
        </span>
        <Link to={ROUTES.regulations}>poradnik</Link>.
      </S.CategoriesHint>
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
        {note && <S.CategoryNote>{note}</S.CategoryNote>}
      </S.CategoryInfo>
    </S.Category>
  );
}
