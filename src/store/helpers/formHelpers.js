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
