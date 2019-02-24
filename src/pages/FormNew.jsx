import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link, navigate } from '@reach/router';
import Script from 'react-load-script';

import { FORM_ERRORS } from '../consts/formConsts';
import { Container } from '../styles/styledComponents';
import googleMapsConfig from '../config/googleMapsConfig';

import * as F from './../components/form/FormComponents/styles';

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

        <F.Area>
          <F.Title>Dane zgłoszenia</F.Title>

          <F.FlexRow>
            <F.FlexItem>
              <ImageField
                id='contextImage'
                text='Dodaj zdjęcie prezentujące kontekst zdarzenia'
                placeholder={ImagePlaceholder}
                onChange={(file) => addContextImage(file, this.state.geocoder)}
                hasError={this.findErrorByType(FORM_ERRORS.contextImageUpload.type)}
                errorMessage={FORM_ERRORS.contextImageUpload.message}
                image={form.contextImage}
              />
            </F.FlexItem>

            <F.FlexItem>
              <ImageField
                id='carImage'
                text='Dodaj zdjęcie, na którym widoczna jest tablica rejestracyjna'
                placeholder={ImagePlaceholder}
                onChange={(file) => addContextImage(file, this.state.geocoder)}
                hasError={this.findErrorByType(FORM_ERRORS.carImageUpload.type)}
                errorMessage={FORM_ERRORS.contextImageUpload.message}
                image={form.carImage}
              />
            </F.FlexItem>
          </F.FlexRow>

          <F.FlexRow>
            <F.FlexItem>
              <AddressField
                id='reportAddressField'
                text='Podaj adres zdarzenia'
                placeholder='np. Storrady-Świętosławy 1b 71-602, 71-602 Szczecin'
                value={form.address.address} places={this.state.places}
                errorMessage={null}
              />
            </F.FlexItem>

            <F.FlexItem>
              <TextField
                id='reportCarPlaceIdField'
                text='Podaj numery rejestracyjne pojazdu'
                placeholder='np. CD1234JT'
                onChange={(value) => this.props.addCarNumber(value)}
                hasError={this.findErrorByType(FORM_ERRORS.carNumber.type)}
                errorMessage={FORM_ERRORS.carNumber.message}
                value={form.carInfo.plateId}
              />
            </F.FlexItem>
          </F.FlexRow>

          <TextAreaField
            id='reportCommentField'
            text='Dodaj komentarz (*komentarz wymagany dla kategorii wykroczenia "pozostałe").'
            placeholder='Np. szczegóły, dotyczące lokalizacji zdarzenia'
            onChange={(value) => this.props.addComment(value)}
            hasError={this.findErrorByType(FORM_ERRORS.comment.type)}
            errorMessage={FORM_ERRORS.comment.message}
            value={form.addComment}
          />
        </F.Area>

        <F.Area>
          <h4>Rodzaj wykroczenia</h4>
          <RatioInputList value={form.category} onChange={this.props.addCrimeType} />
        </F.Area>

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
    category: PropTypes.number,
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
  formErrors: PropTypes.array,
  resetFormData: PropTypes.func
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
