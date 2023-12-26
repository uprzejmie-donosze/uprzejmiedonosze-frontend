import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { Profile } from "./Profile";
import { Settings } from "./Settings";
import * as S from "./styles";
import { updateUser } from "../../store/user";
import { IUpdateUserBody } from "../../api/requests";
import {
  FieldType,
  SettingsState,
  UserState,
  getDefaultSettingsState,
  getDefaultUserState,
  isSubmitAllowed,
} from "./variables";
import { DottedLoader } from "../Icons";
import { Button, ButtonClose } from "../../styles";

export function UserForm() {
  const profile = useAppSelector((state) => state.user.profile);
  const { updating, updated } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [userState, setUserState] = useState<UserState>(
    getDefaultUserState(profile),
  );
  const [settings, setSettings] = useState<SettingsState>(
    getDefaultSettingsState(profile),
  );
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  const isSumbitAllowed = isSubmitAllowed(userState, settings, profile);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!isSumbitAllowed) return;

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
    resetConfirmation();
  }

  function handleSettingsChange(name: string, value: string) {
    setSettings({ ...settings, [name]: value });
    resetConfirmation();
  }

  function resetConfirmation() {
    if (showConfirmation) setShowConfirmation(false);
  }

  useEffect(() => {
    if (updating) setShowConfirmation(false);
    if (updated && !updating) setShowConfirmation(true);
  }, [updated, updating]);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <S.FormContent>
          <Profile user={profile} onChange={handleUserChange} />

          {profile.isRegistered && (
            <Settings
              onChange={handleSettingsChange}
              addressPermSelected={settings.addressPerm}
              policeTypeSelected={settings.policeType}
              reportsCountSelected={settings.reportsCount}
            />
          )}
        </S.FormContent>

        <S.Submit type="submit" disabled={!isSumbitAllowed || updating}>
          {updating ? <DottedLoader /> : "potwierdź"}
        </S.Submit>
      </form>

      {showConfirmation && (
        <S.Confirmation>
          <S.ConfirmationText>
            Dane zaktualizowane pomyślnie!
          </S.ConfirmationText>
          <ButtonClose onClick={resetConfirmation} />
        </S.Confirmation>
      )}
    </section>
  );
}
