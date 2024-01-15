import styled, { css } from "styled-components";
import { colors, convertHex, inputSize, radius } from "../../../styles";
import { FormColumn, FormRowSpaced } from "../styles";
import mediaMin, { breakpoints, mediaMax } from "../../../styles/mediaQueries";

export const ImageContainer = styled.div<{ valid: boolean }>`
  position: relative;
  background: ${colors.placeholder};
  height: 0;
  padding-top: 50%;
  overflow: hidden;
  border-radius: ${radius};
  border: 2px solid ${(props) => (props.valid ? colors.primary : colors.border)};

  ${(props) =>
    props.valid &&
    css`
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        top: 0;
        left: 0;
        background-color: ${colors.primary};
        z-index: 1;
        opacity: 0.1;
        pointer-events: none;
      }
    `}
`;

export const ImageLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
`;

export const ImageInput = styled.input`
  visibility: hidden;
  width: 0px;
  height: 0px;
`;

export const ImageDescription = styled.span`
  position: relative;
  display: block;
  padding-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  background: ${colors.background};
  cursor: default;
`;

export const ImagePlaceholder = styled.img`
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-position: center;
  background-repeat: no-repeat;
  height: 140px;
`;

export const ImagePreview = styled.img<{ "data-loading": boolean }>`
  display: block;
  height: 100%;
  width: 100%;
  min-width: 100%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${(props) => (props["data-loading"] ? "0.3" : "1")};
`;

export const ImageInfo = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(51 51 51 / 80%);
  color: ${colors.white};
  padding: 10px;
  font-size: 13px;
  text-align: center;
`;

export const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: ${colors.placeholder};
`;

export const Map = styled.div<{ disabled: boolean }>`
  background: ${colors.secondary};
  overflow: hidden;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  overflow: hidden;
  border-radius: ${radius};

  ${mediaMax(breakpoints.md)} {
    position: relative;
    width: calc(100vw - 2rem);
    height: 400px;
    margin-top: 1.5rem;
  }

  ${mediaMin(breakpoints.md)} {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 300px;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: ${convertHex(colors.secondary, 80)};
    border: 2px solid ${colors.secondary};
    z-index: 1;
    border-radius: 100%;
    pointer-events: none;
    transform: translate(-50%, -50%);
  }

  &:after {
    z-index: 1;
    width: 5px;
    height: 5px;
  }

  &:before {
    width: 100px;
    height: 100px;
    opacity: 0.6;
  }

  .mapboxgl-touch-pan-blocker,
  .mapbox-improve-map,
  .mapboxgl-ctrl-bottom-right {
    display: none;
  }

  .mapboxgl-control-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    pointer-events: none;
  }

  .mapboxgl-ctrl-zoom-in,
  .mapboxgl-ctrl-zoom-out,
  .mapboxgl-ctrl-geolocate {
    pointer-events: auto;
    width: 20px;
    height: 20px;
    margin: 4px;
  }
`;

export const PoliceInfo = styled.div`
  line-height: 0;
  margin-top: 16px;

  & svg {
    width: 13px;
    height: 13px;
    margin-right: 6px;
    margin-bottom: -1px;
  }
`;

export const MapContainer = styled(FormRowSpaced)`
  ${mediaMax(breakpoints.md)} {
    display: flex;
    flex-direction: column-reverse;
  }

  ${mediaMin(breakpoints.md)} {
    height: 300px;
  }
`;

export const FieldContainer = styled(FormColumn)`
  margin: 0;

  ${mediaMin(breakpoints.md)} {
    height: 100%;
  }
`;

export const CarPlateContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const CarPlatePrev = styled.figure`
  position: relative;
  margin: 0;
  padding: 0;
  margin-left: 5px;
  background: ${colors.placeholder};
  border-radius: ${radius};
  width: 200px;
  height: ${inputSize}px;
  line-height: ${inputSize}px;
  font-size: 13px;
  text-align: center;
  overflow; hidden;
  color: ${colors.textLight};
`;

export const CarPlateImage = styled.img`
  display: block;
  height: 60%;
  width: 90%;
  min-width: 90%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
