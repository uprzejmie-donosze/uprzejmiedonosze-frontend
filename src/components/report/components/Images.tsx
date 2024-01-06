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
  ImageInfo,
  ImageInput,
  ImageLabel,
  ImagePlaceholder,
  ImagePreview,
  Loader,
} from "./styles";
import { LinearLoader } from "../../Loader";

type Event = React.ChangeEvent<HTMLInputElement>;

type ImageProps = {
  id: string;
  label: string;
  disabled: boolean;
  action: (e: Event, id: string) => void;
  loading: boolean;
  appImage: string | null;
  uploadedImage: string | null;
  description: string;
  placeholder: string;
};

export function Images() {
  const dispatch = useAppDispatch();
  const {
    id: appId,
    carImageThumb,
    contextImageThumb,
  } = useAppSelector((state) => state.report.app);
  const { carImage, contextImage, disabled, category } = useAppSelector(
    (state) => state.report.form,
  );

  function handleUpload(e: Event, id: string) {
    if (!e.target.files?.length) return;

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
      <Image
        id={REPORT_CONTEXT_IMAGE_NAME}
        label="Wgraj zdjęcie z widocznym wykroczeniem"
        disabled={disabled}
        action={handleUpload}
        uploadedImage={contextImage.value}
        loading={contextImage.loading}
        appImage={contextImageThumb}
        description={category.contextImageHint}
        placeholder="assets/images/context_image.png"
      />

      <Image
        id={REPORT_CAR_IMAGE_NAME}
        label="Wgraj zdjęcie z widoczną tablicą rejestracyjną"
        disabled={disabled}
        action={handleUpload}
        uploadedImage={carImage.value}
        loading={carImage.loading}
        appImage={carImageThumb}
        description={category.carImageHint}
        placeholder="assets/images/car_image.png"
      />
    </FormRow>
  );
}

function Image({
  id,
  label,
  loading,
  disabled,
  action,
  appImage,
  uploadedImage,
  description,
  placeholder,
}: ImageProps) {
  function handleChange(e: Event) {
    action(e, id);
  }

  return (
    <FormColumn>
      <ImageDescription>{label}</ImageDescription>

      <ImageContainer valid={!!appImage}>
        {loading && (
          <Loader>
            <LinearLoader />
          </Loader>
        )}

        <ImageLabel htmlFor={id}>
          <ImageInput
            id={id}
            onChange={handleChange}
            disabled={disabled}
            type="file"
            accept="image/jpeg, image/png, image/heic"
            multiple
          />

          {uploadedImage || appImage ? (
            <>
              <ImagePreview
                data-loading={loading}
                src={uploadedImage || `${IMAGE_HOST}${appImage}`}
              />
              <ImageInfo>{description}</ImageInfo>
            </>
          ) : (
            <ImagePlaceholder src={placeholder} />
          )}
        </ImageLabel>
      </ImageContainer>
    </FormColumn>
  );
}
