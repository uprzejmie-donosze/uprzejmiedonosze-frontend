export type ReportState = {
  id: string | null;
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
