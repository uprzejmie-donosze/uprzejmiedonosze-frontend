import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RATIO_DATA } from '../../../consts/formConsts';

const RatioInput = ({ text, id, checked, action }) => (
  <div>
    <label htmlFor={id}>{text}</label>

    <input
      name="category"
      type="radio" value={id} id={id}
      checked={checked}
      onChange={(e) => action(e.target.value)}
    />
</div>
);

class RatioInputList extends Component {
  render() {
    const { errorMessage, value, onChange } = this.props;

    return (
      <div style={{padding: '1rem 0'}}>
        {RATIO_DATA.map(ratio => (
          <RatioInput key={ratio.id}
            {...ratio} action={onChange}
            checked={value == ratio.id}
          />
        ))}

        {errorMessage && <span>{errorMessage}</span>}
      </div>
    );
  };
};

RatioInputList.defaultProps = {
  value: 1
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
