export type IUser = {
  data: UserData;
  number: number;
  updated?: string;
  lastLocation?: string;
  appsCount?: number;
  isRegistered?: boolean;
  isTermsConfirmed?: boolean;
};

export type UserData = {
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

export type ErrorResponse = {
  error?: string;
  description?: string; // usually a parent exception error message. Useful to make sentry report more detailed.
  param?: string; // name of the request param that failed validation
  reson?: string; // only in staging env for debug/tracebility
};

export type Report = {
  loaded: boolean;
  loading: boolean;
  date: string | null;
  id: string;
  added: string | null;
  user: UserData;
  status: string;
  category: number;
  statements: {
    witness: boolean;
    gallery: boolean;
  };
  address: {
    latlng?: string;
    address?: string;
    city?: string;
    voivodeship?: string;
    district?: string;
    mapImage?: string;
    county?: string;
    municipality?: string;
    postcode?: string;
  };
  version: string;
  statusHistory: [
    {
      [key: string]: {
        old: string;
        new: string;
      };
    },
  ];
  comments: [
    {
      [key: string]: {
        source: string;
        comment: string;
      };
    },
  ];
  extensions: [
    {
      [key: string]: {
        law: string;
        price: string;
        stopAgresjiOnly: string;
        title: string;
      };
    },
  ];
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
  alpr?: string;
  smCity?: string;
  userComment?: string;
  stopAgresji?: boolean;
  seq?: number;
  number?: string;
  sent?: {
    date?: string;
    subject?: string;
    to?: string;
    method?: string;
    cc?: string;
    from?: string;
    body?: string;
    curl?: object;
  };
};

export type TermsOfUse = {
  terms: { li: string | TermType }[];
  updated: string;
};

export type TermType = {
  text?: string;
  link?: {
    url: string;
    text: string;
  };
}[];
