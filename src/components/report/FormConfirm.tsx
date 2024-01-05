import React from "react";
import { FormNav } from "./components/Nav";
import { Button, colors } from "../../styles";

type Props = {
  back: () => void;
  next: () => void;
};

function FormConfirm({ back, next }: Props) {
  return (
    <section>
      <h1>Podsumowanie</h1>
      <FormNav>
        <Button color={colors.textLight} onClick={back}>
          edycja
        </Button>
        <Button onClick={next}>wyślij</Button>
      </FormNav>
    </section>
  );
}

export default FormConfirm;
