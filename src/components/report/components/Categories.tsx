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
  const stopAgression = useAppSelector(
    (state) => state.user.profile.stopAgresji,
  );
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
        {categories.map((category) => {
          if (!category.title) return;
          return (
            <S.CategoryItem
              key={category.id}
              title={category.desc}
              selected={selected === category.id}
            >
              {category.stopAgresjiOnly !== stopAgression &&
                selected === category.id && (
                  <S.CategoryWarning>
                    ⚠︎ Miejsce wysyłki (Policja) inne niż wskazane w
                    ustawieniach konta (Straż Miejska/Gminna).
                  </S.CategoryWarning>
                )}
              <RadioInputField
                handleChange={() =>
                  handleCategoryChange(
                    category.id,
                    category.contextImageHint,
                    category.carImageHint,
                  )
                }
                contentData={{
                  id: category.id,
                  label: (
                    <Category
                      image={`${IMAGE_HOST}/img/${category.id}.jpg`}
                      description={category.title}
                      note={
                        category.price ? `💰 mandat: ${category.price}` : ""
                      }
                    />
                  ),
                  name: category.id,
                  selected: selected === category.id,
                  value: category.id,
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
