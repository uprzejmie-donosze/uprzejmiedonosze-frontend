import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link, navigate } from '@reach/router';
import Script from 'react-load-script';

import { FORM_ERRORS } from '../consts/formConsts';
import { Container, Layout } from '../styles/styledComponents';
import googleMapsConfig from '../config/googleMapsConfig';
import Navbar from '../components/Navbar';

import * as F from './../components/form/FormComponents/styles';

import {
 autocompleteLocation,
  addComment,
  addCrimeType,
  addCarNumber,
  getFormData,
  addContextImage,
  resetFormData,
  addCarImage,
  addAddress,
  validAddress,
  addDateTime,
  createNewReport,
  updateReport
} from '../store/actions/formActions';

import ImagePlaceholder from '../assets/icons/icon.png';
import ImageField from '../components/form/ImageField';
import AddressField from '../components/form/AddressField';
import TextField from '../components/form/TextField';
import DateTimeField from '../components/form/DateTimeField';
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
        return autocomplete;
      },
    });
  }

  findErrorByType(type) {
    return this.props.formErrors.find(error => error === type) !== undefined;
  }

  componentDidMount() {
    this.isIOSdevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }

  componentDidUpdate(prevProps) {
    const { profile } = this.props;

    if (profile.name !== prevProps.profile.name && profile.draftId !== undefined && profile.draftId) {
      this.props.getFormData(profile.draftId);
    }
  }

  render() {
    const { form, addContextImage, addCarImage, formLoaders, profile } = this.props;
    if (!this.props.auth.uid) return <Redirect from="/report/new" to='login' noThrow />;

    return (
      <Layout>
        <Navbar />

        <Container>
          <FormProgressbar />

          {profile.draftId && (
            <p style={{padding: '1rem', border: '1px solid #f1dd2e', background: '#f3e03b5e'}}>
              <span>Wygląda na to, że masz niedokończone zgłoszenie. Jeśli chcesz rozpocząć nowe zgłoszenie, wyczyć dane</span>
              <button onClick={this.props.resetFormData}>wyczyść dane</button>
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
                  isLoading={formLoaders.isContexImageLoading}
                />
              </F.FlexItem>

              <F.FlexItem>
                <ImageField
                  id='carImage'
                  text='Dodaj zdjęcie, na którym widoczna jest tablica rejestracyjna'
                  placeholder={ImagePlaceholder}
                  onChange={(file) => addCarImage(file)}
                  hasError={this.findErrorByType(FORM_ERRORS.carImageUpload.type)}
                  errorMessage={FORM_ERRORS.contextImageUpload.message}
                  image={form.carImage}
                  isLoading={formLoaders.isCarImageLoading}
                />
              </F.FlexItem>
            </F.FlexRow>

            {form.carInfo.plateImage && <img src={form.carInfo.plateImage} />}

            <F.FlexRow>
              <F.FlexItem>
                <AddressField
                  id='reportAddressField'
                  text='Podaj adres zdarzenia'
                  placeholder='np. Storrady-Świętosławy 1b 71-602, 71-602 Szczecin'
                  value={form.address.address} places={this.state.places}
                  errorMessage={FORM_ERRORS.address.message}
                  hasError={this.findErrorByType(FORM_ERRORS.address.type)}
                  onChange={(address) => this.props.addAddress(address)}
                  validAddress={this.props.validAddress}
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
                  value={form.carInfo.plateId || form.carInfo.plateIdFormImage}
                />
              </F.FlexItem>
            </F.FlexRow>

            {this.isIOSdevice && (
              <DateTimeField
                id='dateTimeReportField'
                text='Podaj datę i godzinę zdarzenia'
                placeholder='12/12/2018 16:00'
                onChange={(value) => this.props.addDateTime(value)}
                hasError={this.findErrorByType(FORM_ERRORS.date.type)}
                errorMessage={FORM_ERRORS.date.message}
                value={form.date}
              />
            )}

            <TextAreaField
              id='reportCommentField'
              text='Dodaj komentarz (*komentarz wymagany dla kategorii wykroczenia "pozostałe").'
              placeholder='Np. szczegóły, dotyczące lokalizacji zdarzenia'
              onChange={(value) => this.props.addComment(value)}
              hasError={this.findErrorByType(FORM_ERRORS.comment.type) || this.findErrorByType(FORM_ERRORS.commentToCategory.type)}
              errorMessage={FORM_ERRORS.comment.message}
              value={form.addComment}
            />
          </F.Area>

          <F.Area>
            <h4>Rodzaj wykroczenia</h4>
            <RatioInputList value={form.category} onChange={this.props.addCrimeType} />
          </F.Area>

          <FormNavigation
            backTo='/app'
            text='Zapisz'
            action={profile.draftId ? this.props.updateReport : this.props.createNewReport}
          />

          <Script url={googleMapsConfig.url} onLoad={this.handleScriptLoad} />
          <Script url='https://cdn.jsdelivr.net/npm/exif-js' />
        </Container>
      </Layout>
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
  formLoaders: PropTypes.shape({
    isContexImageLoading: PropTypes.bool,
    isCarImageLoading: PropTypes.bool,
    isFormSaving: PropTypes.bool
  }),
  completeLocation: PropTypes.func,
  addComment: PropTypes.func,
  addCrimeType: PropTypes.func,
  addCarNumber: PropTypes.func,
  addDateTime: PropTypes.func,
  getFormData: PropTypes.func,
  addContextImage: PropTypes.func,
  addCarImage: PropTypes.func,
  formErrors: PropTypes.array,
  resetFormData: PropTypes.func,
  addAddress: PropTypes.func,
  validAddress: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    form: state.form.formData,
    profile: state.firebase.profile,
    formErrors: state.form.formErrors,
    formLoaders: {
      isContexImageLoading: state.form.isContexImageLoading,
      isCarImageLoading: state.form.isCarImageLoading,
      isFormSaving: state.form.isFormSaving
    }
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
    addCarImage: (file) => dispatch(addCarImage(file)),
    resetFormData: () => dispatch(resetFormData()),
    addAddress: (address) => dispatch(addAddress(address)),
    validAddress: (address) => dispatch(validAddress(address)),
    addDateTime: (dateTime) => dispatch(addDateTime(dateTime)),
    createNewReport: () => dispatch(createNewReport()),
    updateReport: () => dispatch(updateReport()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormNew);
