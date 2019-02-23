import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link, navigate } from '@reach/router';
import Script from 'react-load-script';

import { FORM_ERRORS } from '../consts/formConsts';
import { Container } from '../styles/styledComponents';
import googleMapsConfig from '../config/googleMapsConfig';

import {
 autocompleteLocation,
  addComment,
  addCrimeType,
  addCarNumber,
  getFormData,
  addContextImage,
  resetFormData
} from '../store/actions/formActions';

import ImagePlaceholder from '../assets/icons/icon.png';
import ImageField from '../components/form/ImageField';
import AddressField from '../components/form/AddressField';
import TextField from '../components/form/TextField';
import TextAreaField from '../components/form/TextAreaField';
import RatioInputList from '../components/form/RatioInputList';
import FormNavigation from '../components/form/FormNavigation';
import FormProgressbar from '../components/form/FormProgressbar';

class FormNew extends Component {
  state = {
    geocoder: null,
    places: null,
  }

  handleScriptLoad = () => {
    const { completeLocation } = this.props;

    const bounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(48.638092, 13.399244),
      new google.maps.LatLng(54.634647, 24.729369)
    );

    this.setState({
      geocoder: new google.maps.Geocoder,
      places: (ref) => {
        const autocomplete = new google.maps.places.Autocomplete( ref, { ...googleMapsConfig.options, bounds }, );
        autocomplete.addListener('place_changed', () => completeLocation(autocomplete.getPlace()));
      }
    });
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

  findErrorByType(type) {
    return this.props.formErrors.find(error => error === type) !== undefined;
  }

  render() {
    const { form, addContextImage } = this.props;
    if (!this.props.auth.uid) return <Redirect from="/report/new" to='login' noThrow />;

    return (
      <Container>
        <FormProgressbar />
        {this.props.profile.draftId && (
          <p style={{padding: '1rem', border: '1px solid #f1dd2e', background: '#f3e03b5e'}}>
            <span>Wygląda na to, że masz niedokończony wniosek. Jeśli chcesz rorpocząć nowy wniosek, wyczyć dane</span>
            <button onClick={this.props.resetFormData}>wyczyść wniosek</button>
          </p>
        )}

        <h1>Nowe zgłoszenie</h1>

        <div>
          <h4>Dane zgłoszenia</h4>

          <ImageField
            id='contextImage'
            text='Dodaj zdjęcie prezentujące kontekst zdarzenia'
            placeholder={ImagePlaceholder}
            onChange={(file) => addContextImage(file, this.state.geocoder)}
            image={form.contextImage} errorMessage={null}
          />

          <ImageField
            id='carImage'
            text='Dodaj zdjęcie, na którym widoczna jest tablica rejestracyjna'
            placeholder={ImagePlaceholder}
            onChange={(file) => addContextImage(file, this.state.geocoder)}
            image={form.carImage} errorMessage={null}
          />

          <AddressField
            id='reportAddressField'
            text='Podaj adres zdarzenia'
            placeholder='np. Storrady-Świętosławy 1b 71-602, 71-602 Szczecin'
            value={form.address.address} places={this.state.places}
            errorMessage={null}
          />

          <TextField
            id='reportCarPlaceIdField'
            text='Podaj numery rejestracyjne pojazdu'
            placeholder='np. CD1234JT'
            onChange={(value) => this.props.addCarNumber(value)}
            hasError={this.findErrorByType(FORM_ERRORS.carNumber.type)}
            errorMessage={FORM_ERRORS.carNumber.message}
            value={form.carInfo.plateId}
          />

          <TextAreaField
            id='reportCommentField'
            text='Dodaj komentarz (*komentarz wymagany dla kategorii wykroczenia "pozostałe").'
            placeholder='Np. szczegóły, dotyczące lokalizacji zdarzenia'
            onChange={(value) => this.props.addComment(value)}
            hasError={this.findErrorByType(FORM_ERRORS.comment.type)}
            errorMessage={FORM_ERRORS.comment.message}
            value={form.addComment}
          />
        </div>

        <div>
          <h4>Rodzaj wykroczenia</h4>
          <RatioInputList value={form.category} onChange={this.props.addCrimeType} />
        </div>

        <FormNavigation />

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
  getFormData: PropTypes.func,
  addContextImage: PropTypes.func,
  formErrors: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    form: state.form.formData,
    profile: state.firebase.profile,
    formErrors: state.form.formErrors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    completeLocation: (place) => dispatch(autocompleteLocation(place)),
    addComment: (text) => dispatch(addComment(text)),
    addCrimeType: (type) => dispatch(addCrimeType(type)),
    addCarNumber: (number) => dispatch(addCarNumber(number)),
    getFormData: (reportId) => dispatch(getFormData(reportId)),
    addContextImage: (file, map) => dispatch(addContextImage(file, map)),
    resetFormData: () => dispatch(resetFormData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormNew);
