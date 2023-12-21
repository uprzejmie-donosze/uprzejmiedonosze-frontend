import React, { useState } from "react";
import { useAppSelector } from "../../store";
import { Button } from "../../styles";
import { Profile } from "./Profile";
import { Settings } from "./Settings";
import * as S from "./styles";

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
    policeType: "municipal",
    reportsCount: "200",
    addressPerm: "yes",
  });

  const isInvalid = Object.values(userState).some(
    (value: UserField) => !value.valid,
  );

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(userState);
    console.log(settings);
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

  function handleSettingsChange(name: string, value: string) {
    setSettings({ ...settings, [name]: value });
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <S.FormContent>
          <Profile user={user.profile} onChange={handleUserChange} />

          {user.isRegistered && (
            <Settings
              onChange={handleSettingsChange}
              addressPermSelected={settings.addressPerm}
              policeTypeSelected={settings.policeType}
              reportsCountSelected={settings.reportsCount}
            />
          )}
        </S.FormContent>

        <Button type="submit" disabled={isInvalid}>
          potwierdź
        </Button>
      </form>
    </section>
  );
}
