import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, navigate } from '@reach/router';
import { connect } from 'react-redux';
import { createNewReport, updateReport } from '../../../store/actions/formActions';

import * as S from './styles';
import * as A from '../../Actions/styles';

class FormNavigation extends Component {
  render() {
    return (
      <S.FormNavigation>
        <A.ButtonBordered onClick={() => navigate(this.props.backTo)}>Wróć</A.ButtonBordered>

        <A.ButtonFilled onClick={this.props.action}>
          {this.props.text}
        </A.ButtonFilled>
      </S.FormNavigation>
    );
  };
};

FormNavigation.propTypes = {
  form: PropTypes.shape({
    id: PropTypes.string,
  }),
  backTo: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    form: state.form.formData,
    errors: state.form.formErrors
  };
};

export default connect(mapStateToProps)(FormNavigation);
