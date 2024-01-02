export type IUser = {
  data: {
    name?: string;
    msisdn?: string;
    address?: string;
    email: string;
    sex?: string;
    exposeData?: boolean;
    stopAgresji?: boolean;
    termsConfirmation?: string;
    autoSend?: boolean;
    myAppsSize?: number;
  };
  number: number;
  updated?: string;
  lastLocation?: string;
  appsCount?: number;
  isRegistered?: boolean;
  isTermsConfirmed?: boolean;
};

export type ErrorResponse = {
  error?: string;
};

export type NewReport = {
  loaded: boolean;
  loading: boolean;
  date: string | null;
  id: string;
  added: string | null;
  user: {}; //TOOD
  status: string;
  category: number;
  statements: {
    witness: boolean;
    gallery: boolean;
    hideNameInPdf: boolean;
  };
  address: {}; //TOOD
  version: string;
  statusHistory: []; //TOOD
  comments: []; // TODO
  extensions: []; //TODO
  carImage?: {
    url: string;
    thumb: string;
  };
  contextImage?: {
    url: string;
    thumb: string;
  };
  carInfo?: {
    plateId: string | null;
    plateImage: string | null;
    plateIdFromImage: string | null;
    brand: string | null;
    brandConfidence: number;
    color: string | null;
    colorConfidence: number;
    recydywa: number;
  };
  alpr: string;
};
