import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RATIO_DATA } from '../../../consts/formConsts';

import * as S from './styles';

const RatioInput = ({ text, id, checked, action }) => (
  <S.RatioInput>
    <S.RatioInput.Input
      name="category"
      type="radio" value={id} id={id}
      checked={checked}
      onChange={(e) => action(e.target.value)}
    />

  <S.RatioInput.Label htmlFor={id}>
    <S.RatioInput.Checkbox />
    <svg x="0px" y="0px" width="48.999px" height="48.999px" viewBox="0 0 48.999 48.999">
      <g>
        <path fill="currentColor" d="M47.503,12.835h-1.994c-0.834,0-1.508,0.675-1.508,1.508v0.377h-1.185L40.354,3.08c-0.147-0.697-0.762-1.196-1.476-1.196
          H10.133c-0.713,0-1.327,0.499-1.476,1.196L6.194,14.722H5.01v-0.377c0-0.833-0.676-1.508-1.509-1.508H1.507
          C0.674,12.836,0,13.512,0,14.344v4.777c0,0.833,0.673,1.508,1.507,1.508h1.994c0.833,0,1.509-0.675,1.509-1.508v-2.389h0.864v8.674
          v15.979c0,0.833,0.674,1.51,1.508,1.51h0.652v1.807c0,1.333,1.081,2.414,2.413,2.414h2.209c1.335,0,2.414-1.081,2.414-2.414v-1.807
          h18.854v1.807c0,1.333,1.082,2.414,2.414,2.414h2.212c1.333,0,2.415-1.081,2.415-2.414v-1.807h0.651
          c0.832,0,1.508-0.677,1.508-1.51V25.407v-8.674h0.862v2.389c0,0.833,0.677,1.508,1.511,1.508h1.991
          c0.835,0,1.511-0.675,1.511-1.508v-4.777C49.01,13.51,48.334,12.835,47.503,12.835z M11.465,37.475
          c-1.526,0-2.766-1.238-2.766-2.767s1.239-2.769,2.766-2.769c1.53,0,2.768,1.24,2.768,2.769S12.996,37.475,11.465,37.475z
          M31.796,39.735H17.215v-1.258h14.581V39.735z M31.796,37.225H17.215v-1.26h14.581V37.225z M31.796,34.708H17.215V33.45h14.581
          V34.708z M31.796,32.194H17.215v-1.258h14.581V32.194z M24.505,26.356c-5.572,0-10.937-0.724-15.613-2.08v-7.729l2.463-11.647
          h26.299l2.464,11.646v7.729C35.441,25.633,30.076,26.356,24.505,26.356z M37.545,37.475c-1.525,0-2.768-1.238-2.768-2.767
          s1.24-2.769,2.768-2.769c1.529,0,2.768,1.24,2.768,2.769C40.311,36.237,39.073,37.475,37.545,37.475z"/>
      </g>
    </svg>

    <S.RatioInput.Text>{text}</S.RatioInput.Text>
  </S.RatioInput.Label>
</S.RatioInput>
);

class RatioInputList extends Component {
  render() {
    const { errorMessage, value, onChange } = this.props;

    return (
      <S.RatioInputList>
        {RATIO_DATA.map(ratio => (
          <S.RatioInputList.Item key={ratio.id}>
            <RatioInput {...ratio} action={onChange} checked={value == ratio.id} />
          </S.RatioInputList.Item>
        ))}
      </S.RatioInputList>
    );
  };
};

RatioInputList.defaultProps = {
  value: '1'
};

RatioInputList.propTypes = {
  value: PropTypes.number,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
};

RatioInput.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  checked: PropTypes.bool,
  action: PropTypes.func,
};

export default RatioInputList;
