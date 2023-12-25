import { UserProfile } from "../../store/user/types";

export type UserField = {
  value: string;
  valid: boolean;
};

export type FieldType = "phone" | "address" | "name";

export type UserState = {
  phone: UserField;
  address: UserField;
  name: UserField;
};

export type SettingsState = {
  policeType: string;
  reportsCount: string;
  addressPerm: string;
};

export const POLICE_TYPE_OPTIONS = {
  sa: "SA",
  sm: "SM",
};

export const REPORTS_CONUT_OPTIONS = {
  "200": "200",
  "50": "50",
};

export const ADDRESS_PERM_OPTIONS = {
  yes: "Y",
  no: "N",
};

export function getDefaultUserState(profile: UserProfile): UserState {
  return {
    name: { value: profile.name, valid: !!profile.name.length },
    phone: { value: profile.msisdn, valid: !!profile.name.length },
    address: { value: profile.address, valid: !!profile.address.length },
  };
}

export function getDefaultSettingsState(profile: UserProfile): SettingsState {
  return {
    policeType: profile.stopAgresji
      ? POLICE_TYPE_OPTIONS.sa
      : POLICE_TYPE_OPTIONS.sm,
    reportsCount: String(profile.myAppsSize),
    addressPerm: profile.exposeData
      ? ADDRESS_PERM_OPTIONS.yes
      : ADDRESS_PERM_OPTIONS.no,
  };
}

export function isFormValid(state: UserState): boolean {
  const isValid = Object.values(state).every((value) => value.valid);
  return isValid;
}

export function isSettingsStateDiffers(
  state: SettingsState,
  profile: UserProfile,
): boolean {
  if (!profile.isRegistered) true;

  return Object.keys(state).some((key) => {
    switch (key) {
      case "addressPerm":
        return (
          state.addressPerm !==
          (profile.exposeData
            ? ADDRESS_PERM_OPTIONS.yes
            : ADDRESS_PERM_OPTIONS.no)
        );
      case "policeType":
        return (
          state.policeType !==
          (profile.stopAgresji
            ? POLICE_TYPE_OPTIONS.sa
            : POLICE_TYPE_OPTIONS.sm)
        );
      case "reportsCount":
        return state.reportsCount !== String(profile.myAppsSize);
      default:
        true;
    }
  });
  return true;
}

export function isUserStateDiffers(
  state: UserState,
  profile: UserProfile,
): boolean {
  return Object.keys(state).some((key) => {
    switch (key) {
      case "name":
        return state.name.value !== profile.name;
      case "address":
        return state.address.value !== profile.address;
      case "phone":
        return state.phone.value !== profile.msisdn;
      default:
        true;
    }
  });
}

export function isSubmitAllowed(
  userState: UserState,
  settings: SettingsState,
  profile: UserProfile,
): boolean {
  const userStateDiffers = isUserStateDiffers(userState, profile);
  const settingsStateDiffers = isSettingsStateDiffers(settings, profile);
  const isValid = isFormValid(userState);
  return isValid && (userStateDiffers || settingsStateDiffers);
}
