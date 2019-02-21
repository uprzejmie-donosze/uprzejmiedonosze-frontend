import { throwError } from "rxjs";

export const readGeoDataFromImage = (file) => {
  return new Promise((resolve, reject) => {
    EXIF.getData(file, function() {
      let lat = EXIF.getTag(this, "GPSLatitude");
      let lon = EXIF.getTag(this, "GPSLongitude");

      const latRef = EXIF.getTag(this, "GPSLatitudeRef") || "N";
      const lonRef = EXIF.getTag(this, "GPSLongitudeRef") || "W";
      const dateTime = EXIF.getTag(this, "DateTimeOriginal");

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
}

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

        dataURL = canvas.toDataURL(file.type);;

        return resolve(dataURL);
      };

      image.onerror = reject;
    });

  } catch (err) {
    console.log(err);
  }
}
