import { dataURItoBlob } from '../store/helpers/formHelpers';

const openAlprConfig = {
  url: 'https://api.openalpr.com/v2/recognize?recognize_vehicle=1&country=eu&secret_key=sk_0bcc0e58dab1ea40c4389d70',
};

export function createAlprData(data) {
  let formData = new FormData();
  const blob = dataURItoBlob(data);
  formData.append('image', blob);

  return {
    formData: formData,
    blob: blob
  };
}



export default openAlprConfig;
