export type IUser = {
  data: {
    name?: string;
    msisdn?: string;
    address?: string;
    email: string;
    sex?: string;
    number?: string;
    exposeData?: boolean;
    stopAgresji?: boolean;
    termsConfirmation?: string;
    autoSend?: boolean;
    myAppsSize?: number;
  };
  number?: number;
  updated?: string;
  lastLocation?: string;
  appsCount?: number;
};