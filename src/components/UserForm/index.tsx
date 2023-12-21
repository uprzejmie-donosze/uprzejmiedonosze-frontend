import React, { useState } from "react";
import { useAppSelector } from "../../store";
import { Button } from "../../styles";
import { InputField } from "../Form";
import { Profile } from "./Profile";
import * as S from "./styles";
import { Settings } from "./Settings";

type UserField = {
  value: string;
  valid: boolean;
};

type FieldType = "phone" | "address" | "name";

type UserState = {
  phone: UserField;
  address: UserField;
  name: UserField;
};

export function UserForm() {
  const user = useAppSelector((state) => state.user);
  const [userState, setUserState] = useState<UserState>({
    name: { value: "", valid: true },
    phone: { value: "", valid: true },
    address: { value: "", valid: true },
  });

  const [settings, setSettings] = useState({
    policeType: { value: "municipal", valid: true },
    reportsCount: { value: 200, valid: true },
    addressPerm: { value: "yes", valid: true },
  });

  const isInvalid = Object.values(userState).some(
    (value: UserField) => !value.valid,
  );

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(userState);
  }

  function handleUserChange({
    name,
    value,
    valid,
  }: {
    name: FieldType;
    value: string;
    valid: boolean;
  }) {
    setUserState({
      ...userState,
      [name]: { value, valid },
    });
  }

  function handleSettingsChange({
    name,
    value,
    valid,
  }: {
    name: FieldType;
    value: string;
    valid: boolean;
  }) {
    console.log(value);
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <S.FormContent>
          <Profile user={user.profile} onChange={handleUserChange} />

          {user.isRegistered && <Settings onChange={handleSettingsChange} />}
        </S.FormContent>

        <Button type="submit" disabled={isInvalid}>
          potwierdź
        </Button>
      </form>
    </section>
  );
}
