import styled from 'styled-components';
import { colors } from '../../../styles/variables';

export const RatioInputList = styled.ul`
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

RatioInputList.Item = styled.li`
  width: 100%;
  margin: 0;
  padding: 0;

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

  @media screen and (min-width:800px) {
    flex: 0 0 33%;
  }
`;

export const RatioInput = styled.div`
  position: relative;
`;

RatioInput.Label = styled.label`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 1rem;
  background: #f9f9f9;
  outline: transparent;
`;

RatioInput.Checkbox = styled.div`
  flex-shrink: 0;
  width: 10px;
  height: 10px;
  margin-right: 1rem;
  border-radius: 100%;
  background: ${colors.background}
`;

RatioInput.Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;

  &:checked + ${RatioInput.Label} {
    color: ${colors.primary};
    border-color: ${colors.primary};
    background: #5c59a41c;

    ${RatioInput.Checkbox} {
      background: ${colors.primary}
    }
  }
`;

RatioInput.Icon = styled.svg`
  flex-shrink: 0;
`;

RatioInput.Text = styled.span`
  padding-left: 1rem;
  font-size: .85rem;
`;
