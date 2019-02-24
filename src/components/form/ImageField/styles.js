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
  display: flex;
  justify-content: center;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 2rem;
  background: #f9f9f9;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

ImageField.Icon = styled.svg`
  width: 100%;
  max-width: 200px;
  color: ${colors.background};
`;