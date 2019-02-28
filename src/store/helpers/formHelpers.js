import { FORM_ERRORS } from '../../consts/formConsts';

export const readGeoDataFromImage = (file) => {
  return new Promise((resolve, reject) => {
    EXIF.getData(file, function() {
      let lat = EXIF.getTag(this, "GPSLatitude");
      let lon = EXIF.getTag(this, "GPSLongitude");

      const latRef = EXIF.getTag(this, "GPSLatitudeRef") || "N";
      const lonRef = EXIF.getTag(this, "GPSLongitudeRef") || "W";
      let dateTime = EXIF.getTag(this, "DateTimeOriginal");

      if (dateTime) {
        dateTime = dateTime.replace(/(\d{4}):(\d{2}):(\d{2})/, "$1-$2-$3");
      }

      if (lat && lon) {
        lat = (lat[0] + lat[1]/60 + lat[2]/3600) * (latRef == "N" ? 1 : -1);
        lon = (lon[0] + lon[1]/60 + lon[2]/3600) * (lonRef == "W" ? -1 : 1);

        resolve({
          lat: lat,
          lng: lon,
          dateTime: dateTime || null
        });
      } else {
        reject('error');
      }
    });
  });
};

export const readFileAsync = (file) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const processFilePromise = async (file) => {
  try {
    let dataURL = await readFileAsync(file);

    return new Promise((resolve, reject) => {
      let image = new Image();
      image.src = dataURL;

      const maxWidth = 1200;
      const maxHeight = 1200;

      image.onload = function() {
        const width = image.width;
        const height = image.height;
        const shouldResize = (width > maxWidth) || (height > maxHeight);

        if (!shouldResize) {
          resolve(dataURL);
          return;
        }

        let newWidth = 0;
        let newHeight = 0;

        if (width > height) {
          newHeight = height * (maxWidth / width);
          newWidth = maxWidth;
        } else {
          newWidth = width * (maxHeight / height);
          newHeight = maxHeight;
        }

        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');

        canvas.width = newWidth;
        canvas.height = newHeight;
        context.drawImage(this, 0, 0, newWidth, newHeight);

        dataURL = canvas.toDataURL(file.type);

        return resolve(dataURL);
      };

      image.onerror = reject;
    });

  } catch (err) {
    console.log(err);
  }
};

export const formValidation = (form) => {
  const data = flattenObject(form.formData);
  const category = data.category;
  let isFormValid = true;
  let errorList = [];

  if (category != 0 && category !== null) delete data['comment'];
  if (data['carInfo.plateIdFormImage'] !== null) delete data['carInfo.plateId'];

  delete data['address.voivodeship'];
  delete data['address.city'];
  delete data['carInfo.brand'];
  delete data['date'];
  delete data['user'];
  delete data['id'];
  delete data['number'];

  console.log(data);

  for (let key in data) {
    if (data[key] === null || data[key] === "") {
      isFormValid = false;

      for (let i in FORM_ERRORS) {
        if (FORM_ERRORS[i].key === key) {
          errorList.push(FORM_ERRORS[i].type);
        }
      }
    }
  }

  return {
    isFormValid: isFormValid,
    errorList: errorList
  };
};

export const flattenObject = (ob) => {
  let toReturn = {};

  for (let i in ob) {
    if (!ob.hasOwnProperty(i)) continue;

    if ((typeof ob[i]) == 'object' && ob[i] !== null) {
      let flatObject = flattenObject(ob[i]);

      for (let x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;
        toReturn[i + '.' + x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }
  return toReturn;
};

export const dataURItoBlob = (dataURI) => {
  const byteString = atob(dataURI.split(',')[1]);
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], { type: mimeString });
};

export const cropImage = async (file, config) => {
  const dataURL = await readFileAsync(file);

  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    canvas.width = config.width;
    canvas.height = config.height;

    const context = canvas.getContext('2d');

    const image = new Image();
    image.src = dataURL;

    image.onload = () => {
      context.drawImage(image,
        config.startingPoint.x, config.startingPoint.y,
        config.width, config.height,
        0, 0,
        config.width, config.height
      );

      return resolve(canvas.toDataURL(file.type));
    };

    image.onerror = reject;
  });
};

export function findMax(array) {
  return Math.max.apply( Math, array );
};

export function findMin(array) {
  return Math.min.apply( Math, array );
};

export function coodsArrayToCanvasData(cordsArray) {
  const cordX = cordsArray.map(cords => cords.x);
  const cordY = cordsArray.map(cords => cords.y);

  const maxX = findMax(cordX);
  const minX = findMin(cordX);

  const maxY = findMax(cordY);
  const minY = findMin(cordY);

  return {
    startingPoint: {
      x: minX,
      y: minY,
    },
     height: maxY - minY,
     width: maxX - minX,
  };
};
