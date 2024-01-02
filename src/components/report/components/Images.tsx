import React from "react";
import { FormColumn, FormRow } from "../styles";
import { uploadImage } from "../../../store/report/reportActions";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  IMAGE_HOST,
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
  const {
    id: appId,
    carImageThumb,
    contextImageThumb,
  } = useAppSelector((state) => state.report.app);
  const { carImage, contextImage, disabled } = useAppSelector(
    (state) => state.report.form,
  );

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>, id: string) {
    dispatch(uploadImage(e.target.files[0], appId, id));
    if (e.target.files.length > 1) {
      const imageID =
        e.target.id === REPORT_CAR_IMAGE_NAME
          ? REPORT_CONTEXT_IMAGE_NAME
          : REPORT_CAR_IMAGE_NAME;
      dispatch(uploadImage(e.target.files[1], appId, imageID));
    }
  }

  return (
    <FormRow>
      <FormColumn>
        <ImageDescription>
          Wgraj zdjęcie z widocznym wykroczeniem
        </ImageDescription>

        <ImageContainer valid={!!contextImageThumb}>
          <ImageLabel htmlFor={REPORT_CONTEXT_IMAGE_NAME}>
            <ImageInput
              disabled={disabled}
              id={REPORT_CONTEXT_IMAGE_NAME}
              type="file"
              accept="image/jpeg, image/png, image/heic"
              multiple
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleUpload(e, REPORT_CONTEXT_IMAGE_NAME)
              }
            />

            <ImagePlaceholder src="assets/images/context_image.png" />

            {contextImage.value || contextImageThumb ? (
              <ImagePreview
                loading={contextImage.loading}
                src={contextImage.value || `${IMAGE_HOST}${contextImageThumb}`}
              />
            ) : (
              <ImagePlaceholder src="assets/images/context_image.png" />
            )}

            {contextImage.loading && (
              <Loader>
                <LinearLoader />
              </Loader>
            )}
          </ImageLabel>
        </ImageContainer>
      </FormColumn>

      <FormColumn>
        <ImageDescription>
          Wgraj zdjęcie z widoczną tablicą rejestracyjną
        </ImageDescription>

        <ImageContainer valid={!!carImageThumb}>
          <ImageLabel htmlFor={REPORT_CAR_IMAGE_NAME}>
            <ImageInput
              disabled={disabled}
              id={REPORT_CAR_IMAGE_NAME}
              type="file"
              accept="image/jpeg, image/png, image/heic"
              multiple
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleUpload(e, REPORT_CAR_IMAGE_NAME)
              }
            />

            {carImage.value || carImageThumb ? (
              <ImagePreview
                loading={carImage.loading}
                src={carImage.value || `${IMAGE_HOST}${carImageThumb}`}
              />
            ) : (
              <ImagePlaceholder src="assets/images/car_image.png" />
            )}
          </ImageLabel>

          {carImage.loading && (
            <Loader>
              <LinearLoader />
            </Loader>
          )}
        </ImageContainer>
      </FormColumn>
    </FormRow>
  );
}
