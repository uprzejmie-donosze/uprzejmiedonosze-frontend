import heic2any from "heic2any";
import ExifReader from "exifreader";
import { getDateTime } from "./datetime";

type Medatata = {
  location: {
    lat: string;
    lng: string;
  };
  dateTime: string | null;
};

export function invalidImageType(type: string): boolean {
  return !/^image\//i.test(type);
}

export async function getMedatataFromImage(file: any): Promise<Medatata> {
  const exif = await ExifReader.load(file);
  const [lat, lng] = readGeoDataFromExif(exif);
  const dateTime = getDateTimeFromExif(exif);

  return {
    location: { lat, lng },
    dateTime: getDateTime(dateTime),
  };
}

export async function resizeImage(file: Blob) {
  const imageURI = await imageToDataUri(file);

  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageURI;

    const maxWidth = 1200;
    const maxHeight = 1200;

    image.onload = function () {
      const width = image.width;
      const height = image.height;
      const shouldResize = width > maxWidth || height > maxHeight;

      if (!shouldResize) {
        resolve(imageURI);
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

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      canvas.width = newWidth;
      canvas.height = newHeight;
      //@ts-ignore
      context.drawImage(this, 0, 0, newWidth, newHeight);
      return resolve(canvas.toDataURL("image/jpeg", 0.95));
    };
    image.onerror = function () {
      reject("Błąd podczas przetwarzania zdjęcia");
    };
  });
}

function readGeoDataFromExif(exif: ExifReader.Tags) {
  const lat = exif?.GPSLatitude?.description;
  const lng = exif?.GPSLongitude?.description;
  return [lat, lng];
}

function getDateTimeFromExif(exif: ExifReader.Tags): string | null {
  const dateTime =
    exif.DateTimeOriginal ||
    exif.CreateDate ||
    exif.DateTimeDigitized ||
    exif.DateCreated ||
    exif.DateTimeCreated ||
    exif.DigitalCreationDateTime ||
    exif.DateTime;
  return dateTime?.description;
}

async function imageToDataUri(img: Blob): Promise<string> {
  if (img.type.includes("hei")) {
    const blob = await heic2any({ blob: img, toType: "image/jpeg" });
    return URL.createObjectURL(blob as Blob);
  } else {
    return await pngToDataUri(img);
  }
}

function pngToDataUri(field: Blob): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result as string));
    reader.readAsDataURL(field);
  });
}
