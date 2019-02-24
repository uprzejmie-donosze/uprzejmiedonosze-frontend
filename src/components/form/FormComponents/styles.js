import styled from 'styled-components';
import { colors } from '../../../styles/variables';

export const Title = styled.h3`
  margin: 0;
  padding-bottom: 1rem;
`;

export const Area = styled.fieldset`
  background: white;
  padding: 1rem;
  border: 0;
  border-radius: 3px;

  & + & {
    margin-top: 1rem;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;

  @media screen and (min-width: 600px) {
    margin: -.5rem;
  }
`;

export const FlexItem = styled.div`
  width: 100%;

  & + & {
    margin-top: 1rem;
  }

  @media screen and (min-width: 600px) {
    flex: 0 0 50%;
    padding: .5rem;

    & + & {
      margin-top: 0;
    }
  }
`;

export const Field = styled.div`
  position: relative;
  padding: 1rem 0;
`;

export const Label = styled.label`
  display: block;
  padding-bottom: .5rem;
  font-size: .85rem;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: .6rem;
  border-radius: 5px;
  border: 1px solid lightgray;
  background: #f9f9f9;
  outline: transparent;

  &:focus {
    border-color: ${colors.primary};
    background: #5c59a41c;
  }
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: .6rem;
  border-radius: 5px;
  border: 1px solid lightgray;
  background: #f9f9f9;
  outline: transparent;
  resize: none;

  &:focus {
    border-color: ${colors.primary};
    background: #5c59a41c;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  font-size: .75rem;
  padding-top: .3rem;
  color: #d82727;
`;
