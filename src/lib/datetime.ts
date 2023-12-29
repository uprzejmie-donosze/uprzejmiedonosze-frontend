import { DateTime } from "luxon";

export function getDateTime(dateTime: string | null): string | null {
  if (typeof dateTime === "string") {
    let dt = DateTime.fromFormat(dateTime, "yyyy:MM:dd HH:mm:ss");
    if (!dt.isValid) dt = DateTime.fromFormat(dateTime, "yyyy:MM:dd HH:mm");
    if (!dt.isValid) dt = DateTime.fromISO(dateTime);
    if (dt.isValid) return dt.toFormat("yyyy-LL-dd'T'HH:mm");
  }
  return null;
}
