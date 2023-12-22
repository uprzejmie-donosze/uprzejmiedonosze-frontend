import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { Profile } from "./Profile";
import { Settings } from "./Settings";
import * as S from "./styles";
import { updateUser } from "../../store/user";
import { IUpdateUserBody } from "../../api/requests";
import {
  ADDRESS_PERM_OPTIONS,
  DEFAULT_SETTINGS,
  DEFAULT_USER_STATE,
  POLICE_TYPE_OPTIONS,
} from "./variables";
import { DottedLoader } from "../Icons";

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
  const [userState, setUserState] = useState<UserState>(DEFAULT_USER_STATE);
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.user.profile);
  const updating = useAppSelector((state) => state.user.updating);

  const isInvalid = Object.values(userState).some(
    (value: UserField) => !value.valid,
  );
  const hasDefaults = !!profile.name.length && !!profile.address;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (isInvalid || !hasDefaults) return;

    const userData: IUpdateUserBody = {
      name: userState.name.value || profile.name,
      address: userState.address.value || profile.address,
      msisdn: userState.phone.value || profile.msisdn,
      exposeData: settings.addressPerm,
      stopAgresji: settings.policeType,
      myAppsSize: Number(settings.reportsCount),
    };
    dispatch(updateUser(userData));
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
          <Profile user={profile} onChange={handleUserChange} />

          {profile.isRegistered && (
            <Settings
              onChange={handleSettingsChange}
              addressPermSelected={
                settings.addressPerm ||
                (profile.exposeData
                  ? ADDRESS_PERM_OPTIONS.yes
                  : ADDRESS_PERM_OPTIONS.no)
              }
              policeTypeSelected={
                settings.policeType ||
                (profile.stopAgresji
                  ? POLICE_TYPE_OPTIONS.sa
                  : POLICE_TYPE_OPTIONS.sm)
              }
              reportsCountSelected={
                settings.reportsCount || String(profile.myAppsSize)
              }
            />
          )}
        </S.FormContent>

        <S.Submit
          type="submit"
          disabled={isInvalid || !hasDefaults || updating}
        >
          {updating ? <DottedLoader /> : "potwierdź"}
        </S.Submit>
      </form>
    </section>
  );
}
