import React from "react";
import { useAsync } from "react-use";
import { useAppDispatch } from "../../store";
import { confirmTermsOfUse } from "../../store/user";
import { apiClient } from "../../api";
import { LinearLoader } from "../Loader";
import { TermType } from "../../api/responses";
import { Action, Date, Item, Link, List, Title } from "./styles";

type Props = {
  withConfirmation?: boolean;
};

export function TermsOfUse({ withConfirmation = true }: Props) {
  const dispatch = useAppDispatch();
  const { value, loading, error } = useAsync(() => apiClient.getTermsOfUse());

  function handleConfirmation() {
    dispatch(confirmTermsOfUse());
  }

  if (loading) {
    return <LinearLoader />;
  }

  if (!!error || !value) {
    return <p>{error.message || "Nie udało się pobrać danych."}</p>;
  }

  return (
    <section>
      <Title>Regulamin serwisu Uprzejmie Donoszę</Title>

      <List>
        {value.terms.map(({ li }, i) => {
          if (typeof li === "string") return <Item key={li}>{li}</Item>;

          const content = (li as TermType).map((element) => (
            <>
              {element.text && <span>{element.text}</span>}
              {element.link && (
                <Link to={element.link.url}>&nbsp;{element.link.text}</Link>
              )}
            </>
          ));
          return <Item key={i}>{content}</Item>;
        })}
      </List>

      <Date>
        Aktualizacja: <strong>{value.updated}</strong>
      </Date>

      {withConfirmation && (
        <Action onClick={handleConfirmation}>potwierdź</Action>
      )}
    </section>
  );
}
