import styled from "styled-components";
import { colors, radius } from "../../../styles";

export const FormContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 50px;
`;

export const ImageContainer = styled.div`
  position: relative;
  background: ${colors.placeholder};
  height: 0;
  padding-top: 50%;
  overflow: hidden;
  border-radius: ${radius};
  border: 2px solid ${colors.border};
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
  padding-top: 20px;
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

export const ImagePreview = styled.img<{ loading: boolean }>`
  display: block;
  opacity: 1;
  height: 100%;
  width: 100%;
  min-width: 100%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${(props) => (props.loading ? "0.3" : "1")};
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
