export const formStatus = {
  draft: 'draft',
  save: 'save',
  ready: 'ready'
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
    id: 10,
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
  address: {
    key: 'address.latlng',
    type: 'addressMessage',
    message: 'Nieprawidłowy adres, wybierz adres z listy'
  },
  category: {
    type: 'categoryError',
    message: 'Żadna z kategorii wykroczenia nie została zaznaczona'
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
