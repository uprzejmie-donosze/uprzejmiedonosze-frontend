import React from "react";
import { FormRow } from "../styles";
import { uploadImage } from "../../../store/report/reportActions";
import { useAppDispatch, useAppSelector } from "../../../store";
import { DottedLoader } from "../../Icons";

export function Images() {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.report);

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>, id: string) {
    dispatch(uploadImage(e.target.files[0], id));
    if (e.target.files.length > 1) {
      dispatch(
        uploadImage(
          e.target.files[1],
          e.target.id === "carImage" ? "contextImage" : "carImage",
        ),
      );
    }
  }

  return (
    <FormRow>
      <div style={{ padding: "1rem 0" }}>
        <label htmlFor="carImage">
          Wgraj zdjęcie z widoczną tablicą rejestracyjną
        </label>
        <input
          disabled={form.disabled}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleUpload(e, "carImage")
          }
          id="carImage"
          type="file"
          accept="image/jpeg, image/png, image/heic"
          multiple
        />
        {form.carImage.value && <img src={form.carImage.value} />}
        {form.carImage.loading && <DottedLoader />}
      </div>

      <div>
        <label htmlFor="contextImage">
          Wgraj zdjęcie z widocznym wykroczeniem
        </label>
        <input
          disabled={form.disabled}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleUpload(e, "contextImage")
          }
          id="contextImage"
          type="file"
          accept="image/jpeg, image/png, image/heic"
          multiple
        />
        {form.contextImage.value && <img src={form.contextImage.value} />}
        {form.contextImage.loading && <DottedLoader />}
      </div>
    </FormRow>
  );
}
