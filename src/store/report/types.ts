export type ReportFormState = {
  disabled: boolean;
  carImage: ImageData;
  contextImage: ImageData;
  datetime: {
    value: string;
    source: string;
  };
  address: {
    value: string | null;
    source: string | null;
  };
};

export type ImageData = {
  loading: boolean;
  loaded: boolean;
  error: string | null;
  value: string | null;
};

export type ReportAppState = {
  loaded: boolean;
  loading: boolean;
  id: string;
  date: string | null;
  added: string | null;
  status: string;
  carImageThumb: string | null;
  contextImageThumb: string | null;
  plateIdFromImage: string | null;
  plateImage: string | null;
};
