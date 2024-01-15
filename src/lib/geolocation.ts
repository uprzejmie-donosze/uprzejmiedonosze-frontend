import mapboxgl from "mapbox-gl";

const mapToken = process.env.MAP_TOKEN;

export function init(
  element: HTMLElement,
  lat: number,
  lng: number,
): mapboxgl.Map {
  let center: [number, number] = [19.480311, 52.069321];

  if (lat && lat) {
    center = [lng, lat];
  }

  mapboxgl.accessToken = mapToken;
  const map = new mapboxgl.Map({
    zoom: 15,
    hash: false,
    // maxBounds
    maxZoom: 16,
    minZoom: 6,
    scrollZoom: false,
    style: "mapbox://styles/mapbox/outdoors-v12",
    cooperativeGestures: true,
    dragRotate: false,
    center: center,
    container: element,
  });

  map.addControl(
    new mapboxgl.NavigationControl({
      showCompass: false,
      showZoom: true,
      visualizePitch: true,
    }),
    "top-left",
  );

  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true,
      showUserHeading: true,
    }),
    "top-left",
  );

  map.dragRotate.disable();
  map.touchZoomRotate.disableRotation();

  return map;
}
