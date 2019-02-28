import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, navigate } from '@reach/router';
import { connect } from 'react-redux';

import { submitReport, createNewReport } from '../../../store/actions/formActions';

class FormNavigation extends Component {
  submit() {
    navigate(`/app/report/${this.props.form.id}`);
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-between", position: "fixed", width: "100%", left: '0', bottom: '0', padding: "1rem", background: "white"}}>
        <Link style={{background: 'white'}} to="/app">back home</Link>

        <button style={{background: 'white'}} onClick={() => this.props.draftId ? this.submit() : this.props.createNewReport()}>
          {this.props.draftId ? 'save changes' : 'save report'}
        </button>
      </div>
    );
  };
};

FormNavigation.propTypes = {
  form: PropTypes.shape({
    id: PropTypes.string,
  }),
  draftId: PropTypes.string,
  createNewReport: PropTypes.func,
  submitReport: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    form: state.form.formData,
    draftId: state.firebase.profile.draftId,
    errors: state.form.formErrors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewReport: () => dispatch(createNewReport()),
    submitReport: () => dispatch(submitReport()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormNavigation);
