export const FORM_STATUSES = {
  draft: 'draft',
  save: 'save',
  archived: 'archived',
  sentEmail: 'sent-email',
  visited: 'visited',
  punished: 'punished',
  ignored: 'ignored'
};

export const RATIO_DATA = [
  {
    id: 7,
    text: 'Niezastosowanie się do znaków',
    image: '',
  },
  {
    id: 8,
    text: 'Parkowanie z dala od krawędzi jezdni',
    image: '',
  },
  {
    id: 1,
    text: 'Parkowanie za barierkami',
    image: '',
  },
  {
    id: 4,
    text: 'Zastawienie chodnika (mniej niż 1.5m)',
    image: '',
  },
  {
    id: 2,
    text: 'Mniej niż 15m od przystanku',
    image: '',
  },
  {
    id: 3,
    text: 'Mniej niż 10m od skrzyżowania',
    image: '',
  },
  {
    id: 5,
    text: 'Mniej niż 10m od przejścia dla pieszych',
    image: '',
  },
  {
    id: 0,
    text: 'Pozostałe',
    image: '',
  }
];

export const FORM_ERRORS = {
  carNumber: {
    key: 'carInfo.plateId',
    type: 'carNumberError',
    message: 'Numer rejestracyjny jest nieprawidłowy'
  },
  comment: {
    key: 'comment',
    type: 'commentError',
    message: 'Komentarz jest zbyt krótki (min. 20 znaków)'
  },
  commentToCategory: {
    key: 'category',
    type: 'commentRequired',
    message: 'Komentarz jest zbyt krótki (min. 20 znaków'
  },
  address: {
    key: 'address.latlng',
    type: 'addressMessage',
    message: 'Nieprawidłowy adres, wybierz adres z listy'
  },
  date: {
    key: 'date',
    type: 'dateError',
    message: 'Nieprawidłowa data'
  },
  contextImageUpload: {
    key: 'contextImage',
    type: 'contextImageUploadError',
    message: 'Nie udało się zapisać zdjęcia'
  },
  contextImageAutocomplete: {
    type: 'contextImageAutocompleteError',
    message: 'Nie udało się pobrać lokalizacji ze zdjęcia'
  },
  carImageUpload: {
    key: 'carImage',
    type: 'carImageUploadError',
    message: 'Nie udało się zapisać zdjęcia'
  },
  carImageAutocomplete: {
    type: 'carImageAutocompleteError',
    message: 'Nie udało się pobrać numerów rejestracyjnych ze zdjęcia'
  }
};

export const FROM_STRUCTURE = {
  date: null,
  id: null,
  number: null,
  status: FORM_STATUSES.draft,
  contextImage: null,
  carImage: null,
  category: 7,
  comment: null,
  carInfo: {
    plateId: null,
    plateIdFormImage: null,
    brand: null,
    plateImage: null,
    recydywa: 0
  },
  address: {
    address: '',
    city: '',
    voivodeship: 'default',
    country: 'Polska',
    latlng: null
  },
  user: null,
};

