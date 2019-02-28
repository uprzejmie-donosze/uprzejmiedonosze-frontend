import styled from 'styled-components';
import { colors } from '../../../styles/variables';

export const ImageField = styled.div`
  width: 100%;
  max-width: 300px;
`;

ImageField.Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;

ImageField.Label = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 2rem;
  background: #f9f9f9;
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

ImageField.Icon = styled.svg`
  width: 100%;
  max-width: 200px;
  color: ${colors.background};
`;

ImageField.Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

ImageField.Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00e27357;
  z-index: 2;
`;