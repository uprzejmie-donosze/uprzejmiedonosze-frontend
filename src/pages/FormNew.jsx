import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link, navigate } from '@reach/router';
import Script from 'react-load-script';

import { Container } from '../styles/styledComponents';
import googleMapsConfig from '../config/googleMapsConfig';
import {
  autocompleteLocation,
  addComment,
  addCrimeType,
  addCarNumber,
  submitReport,
  createNewReport,
  getFormData,
  addContextImage
} from '../store/actions/formActions';

class FormNew extends Component {
  autocompleteRef = React.createRef();

  state = {
    geocoder: null
  }

  handleScriptLoad = () => {
    const { completeLocation } = this.props;

    this.setState({ geocoder: new google.maps.Geocoder });

    const autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteRef.current,
      {
        ...googleMapsConfig.options,
        bounds: new google.maps.LatLngBounds(
          new google.maps.LatLng(48.638092, 13.399244),
          new google.maps.LatLng(54.634647, 24.729369)
        )
      },
    );

    autocomplete.addListener('place_changed', () => completeLocation(autocomplete.getPlace()));
  }

  componentDidMount() {
    // console.log(this.props.profile.draftId);
  }

  componentDidUpdate(prevProps) {
    const { profile } = this.props;

    if (profile.name !== prevProps.profile.name && profile.draftId !== undefined && profile.draftId) {
      this.props.getFormData(profile.draftId);
    }
  }

  submit() {
    navigate(`/app/report/${this.props.form.id}`);
  }

  render() {
    const { form } = this.props;

    if (!this.props.auth.uid) return <Redirect from="/report/new" to='login' noThrow />;

    return (
      <Container>
        <div>
          <span style={{color: '#34dd7eff'}}>New report &gt; </span>
          <span style={{color: 'lightgray'}}>Confirm &gt; </span>
          <span style={{color: 'lightgray'}}>Confirmation</span>
        </div>

        <h1>New Report</h1>

        <div>
          <h4>Report information</h4>

          <p style={{padding: '1rem 0'}}>
            <label htmlFor="contextImage">Add image</label>
            <input id="contextImage" type="file" accept="image/jpeg" onChange={(e) => this.props.addContextImage(e.target.files[0], this.state.geocoder)}/>
          </p>

          <p style={{padding: '1rem 0'}}>
            <label htmlFor="carImage">Add image 2</label>
            <input id="carImage" type="file" accept="image/jpeg" />
          </p>

          <p style={{padding: '1rem 0'}}>
            <label htmlFor="formAddress">Address of the incident</label>
            <input type="address" id="formAddress" ref={this.autocompleteRef} value={form.address.address} onChange={() => console.log('change')}/>
          </p>

          <p style={{padding: '1rem 0'}}>
            <label>Car numbers</label>
            <input value={this.props.form.carInfo.plateId || ''} type="text" onChange={(e) => this.props.addCarNumber(e.target.value)} />
          </p>

          <p style={{padding: '1rem 0'}}>
            <label htmlFor="formComment">Comments</label>
            <input type="text" id="formComment" onChange={(e) => this.props.addComment(e.target.value)} />
          </p>
        </div>

        <div>
          <h4>Kind of crime</h4>

          <p>
            <label htmlFor="formCrime1">Crime 1</label>
            <input
              type="radio" value={1} id="formCrime1"
              checked={this.props.form.category == 1}
              onChange={(e) => this.props.addCrimeType(e.target.value)}
            />
          </p>

          <p>
            <label htmlFor="formCrime2">Crime 2</label>
            <input
              type="radio" value={2} id="formCrime2"
              checked={this.props.form.category === 2}
              onChange={(e) => this.props.addCrimeType(e.target.value)}
            />
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", position: "fixed", width: "100%", left: '0', bottom: '0', padding: "1rem", background: "white"}}>
          <Link style={{background: 'white'}} to="/app">back home</Link>

          <button style={{background: 'white'}} onClick={() => this.props.profile.draftId ? this.submit() : this.props.createNewReport()}>
            {this.props.profile.draftId ? 'save changes' : 'save report'}
          </button>
        </div>
        <Script url={googleMapsConfig.url} onLoad={this.handleScriptLoad} />
        <Script url='https://cdn.jsdelivr.net/npm/exif-js' />
      </Container>
    );
  }
};

FormNew.propTypes = {
  auth: PropTypes.shape({
    uid: PropTypes.string
  }),
  form: PropTypes.shape({
    id: PropTypes.string,
    category: PropTypes.string,
    carInfo: PropTypes.shape({
      plateId: PropTypes.string
    })
  }),
  profile: PropTypes.shape({
    name: PropTypes.string,
    draftId: PropTypes.string
  }),
  completeLocation: PropTypes.func,
  addComment: PropTypes.func,
  addCrimeType: PropTypes.func,
  addCarNumber: PropTypes.func,
  submitReport: PropTypes.func,
  createNewReport: PropTypes.func,
  getFormData: PropTypes.func,
  addContextImage: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    form: state.form.formData,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    completeLocation: (place) => dispatch(autocompleteLocation(place)),
    addComment: (text) => dispatch(addComment(text)),
    addCrimeType: (type) => dispatch(addCrimeType(type)),
    addCarNumber: (number) => dispatch(addCarNumber(number)),
    createNewReport: () => dispatch(createNewReport()),
    submitReport: () => dispatch(submitReport()),
    getFormData: (reportId) => dispatch(getFormData(reportId)),
    addContextImage: (file, map) => dispatch(addContextImage(file, map))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormNew);
