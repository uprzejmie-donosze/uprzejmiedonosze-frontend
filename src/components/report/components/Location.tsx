import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { InputField } from "../../Form";
import { stringRequired } from "../../Form/validation";
import { Spinner } from "../../Loader/styles";
import { FieldContainer, Map, MapContainer } from "./styles";
import { init } from "../../../lib/geolocation";
import { throttle } from "../../../scripts/optimise";
import { getAddress, setCoords } from "../../../store/report";
import { useAppDispatch, useAppSelector } from "../../../store";
import { ReportAppState, ReportFormState } from "../../../store/report/types";
import { REPORT_DATA_SOURCE } from "../../../constants";

function coordsFromState(state: {
  form: ReportFormState;
  app: ReportAppState;
}): { lat: number | null; lng: number | null } {
  if (state.form.location.lng && state.form.location.lng) {
    return {
      lat: state.form.location.lat,
      lng: state.form.location.lng,
    };
  }

  const coords = (state.app.address?.latlng || "").split(",");
  if (!!coords.length && !!state.app.address?.latlng?.length) {
    return {
      lat: Number(coords[0]),
      lng: Number(coords[1]),
    };
  }

  return {
    lat: null,
    lng: null,
  };
}

export function Location() {
  const mapRef = useRef();
  const stateRef = useRef<{ map: mapboxgl.Map; lat: number; lng: number }>();
  const [map, setMap] = useState<mapboxgl.Map>(null);
  const dispatch = useAppDispatch();
  const address = useAppSelector(
    (state) => state.report.form.location.address.fullAddress,
  );
  const addressSource = useAppSelector(
    (state) => state.report.form.location.source,
  );
  const addressLoading = useAppSelector(
    (state) => state.report.form.location.loading,
  );
  const { lat, lng } = useAppSelector((state) => coordsFromState(state.report));

  stateRef.current = { map, lat, lng };

  useEffect(() => {
    const mapBox = init(mapRef.current, lat, lng);
    setMap(mapBox);
    mapBox.on("dragend", throttle(updateAddress, 3000));
  }, []);

  useEffect(() => {
    if (lat && lng) {
      stateRef.current && stateRef.current.map.setCenter([lng, lat]);
      dispatch(getAddress(lat, lng));
    }
  }, [lat, lng]);

  function updateAddress() {
    if (!stateRef.current.map) return;
    const { lat: new_lat, lng: new_lng } = stateRef.current.map.getCenter();
    // Check if coords differs as 'setCenter' function triggered, e.g. after getting image coords,
    // triggered 'moveend' event.s
    if (stateRef.current.lat !== new_lat && stateRef.current.lng !== new_lng) {
      dispatch(setCoords(new_lat, new_lng, REPORT_DATA_SOURCE.user));
    }
  }

  return (
    <MapContainer>
      <FieldContainer>
        <Map ref={mapRef} />
      </FieldContainer>

      <FieldContainer>
        <InputField
          handleChange={() => console.log("hello")}
          contentData={{
            defaultValue: address,
            id: "location",
            type: "text",
            label: "Wskaż adres na mapie",
            name: "location",
            validate: stringRequired,
            disabled: true,
          }}
        />
        {addressSource === REPORT_DATA_SOURCE.picture && (
          <small>adres pobrany ze zdjęcia</small>
        )}
        {addressLoading && <Spinner size="30px" />}
      </FieldContainer>
    </MapContainer>
  );
}
