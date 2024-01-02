import React from "react";
import { FormRow } from "../styles";
import { uploadImage } from "../../../store/report/reportActions";
import { useAppDispatch, useAppSelector } from "../../../store";
import { DottedLoader } from "../../Icons";
import {
  REPORT_CAR_IMAGE_NAME,
  REPORT_CONTEXT_IMAGE_NAME,
} from "../../../constants";
import {
  ImageContainer,
  ImageDescription,
  ImageInput,
  ImageLabel,
  ImagePlaceholder,
  ImagePreview,
  Loader,
} from "./styles";
import { LinearLoader } from "../../Loader";

export function Images() {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.report);

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>, id: string) {
    dispatch(uploadImage(e.target.files[0], form.id, id));
    if (e.target.files.length > 1) {
      const imageID =
        e.target.id === REPORT_CAR_IMAGE_NAME
          ? REPORT_CONTEXT_IMAGE_NAME
          : REPORT_CAR_IMAGE_NAME;
      dispatch(uploadImage(e.target.files[1], form.id, imageID));
    }
  }

  return (
    <FormRow>
      <div>
        <ImageDescription>
          Wgraj zdjęcie z widocznym wykroczeniem
        </ImageDescription>

        <ImageContainer>
          <ImageLabel htmlFor={REPORT_CONTEXT_IMAGE_NAME}>
            <ImageInput
              disabled={form.disabled}
              id={REPORT_CONTEXT_IMAGE_NAME}
              type="file"
              accept="image/jpeg, image/png, image/heic"
              multiple
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleUpload(e, REPORT_CONTEXT_IMAGE_NAME)
              }
            />

            <ImagePlaceholder src="assets/images/context_image.png" />

            {form.contextImage.value || form.appData?.contextImage?.thumb ? (
              <ImagePreview
                loading={form.contextImage.loading}
                src={
                  form.contextImage.value || form.appData?.contextImage?.thumb
                }
              />
            ) : (
              <ImagePlaceholder src="assets/images/context_image.png" />
            )}

            {form.contextImage.loading && (
              <Loader>
                <LinearLoader />
              </Loader>
            )}
          </ImageLabel>
        </ImageContainer>
      </div>

      <div>
        <ImageDescription>
          Wgraj zdjęcie z widoczną tablicą rejestracyjną
        </ImageDescription>

        <ImageContainer>
          <ImageLabel htmlFor={REPORT_CAR_IMAGE_NAME}>
            <ImageInput
              disabled={form.disabled}
              id={REPORT_CAR_IMAGE_NAME}
              type="file"
              accept="image/jpeg, image/png, image/heic"
              multiple
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleUpload(e, REPORT_CAR_IMAGE_NAME)
              }
            />

            {form.carImage.value || form.appData?.carImage?.thumb ? (
              <ImagePreview
                loading={form.carImage.loading}
                src={form.carImage.value || form.appData?.carImage?.thumb}
              />
            ) : (
              <ImagePlaceholder src="assets/images/car_image.png" />
            )}
          </ImageLabel>

          {form.carImage.loading && (
            <Loader>
              <LinearLoader />
            </Loader>
          )}
        </ImageContainer>
      </div>
    </FormRow>
  );
}
