import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from '@reach/router';
import Script from 'react-load-script';

import { Container } from '../styles/styledComponents';

import googleMapsConfig from '../config/googleMapsConfig';
import { autocompleteLocation, addComment, addCrimeType, addCarNumber, submitReport } from '../store/actions/formActions';

class FormNew extends Component {
  autocompleteRef = React.createRef();

  componentDidMount() {
    // dispatch action => create new report
  }

  handleScriptLoad = () => {
    const { completeLocation } = this.props;

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

  render() {
    if (!this.props.auth.uid) return <Redirect from="/report/new" to='login' noThrow />;

    return (
      <Container>
        <button onClick={this.props.submitReport}>submit form</button>
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
            <input id="contextImage" type="file" accept="image/jpeg" />
          </p>

          <p style={{padding: '1rem 0'}}>
            <label htmlFor="carImage">Add image 2</label>
            <input id="carImage" type="file" accept="image/jpeg" />
          </p>

          <p style={{padding: '1rem 0'}}>
            <label htmlFor="formAddress">Address of the incident</label>
            <input type="address" id="formAddress" ref={this.autocompleteRef}/>
          </p>

          <p style={{padding: '1rem 0'}}>
            <label>Car numbers</label>
            <input value={this.props.form.carNumber || ''} type="text" onChange={(e) => this.props.addCarNumber(e.target.value)} />
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
              type="radio" value="1" id="formCrime1"
              checked={this.props.form.crimeType == 1}
              onChange={(e) => this.props.addCrimeType(e.target.value)}
            />
          </p>

          <p>
            <label htmlFor="formCrime2">Crime 2</label>
            <input
              type="radio" value="2" id="formCrime2"
              checked={this.props.form.crimeType == 2}
              onChange={(e) => this.props.addCrimeType(e.target.value)}
            />
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", position: "fixed", width: "100%", left: '0', bottom: '0', padding: "1rem", background: "white"}}>
          <Link style={{background: 'white'}} to="/app">back home</Link>
          <Link style={{background: 'white'}} to="/app/report/create">next</Link>
        </div>
        <Script url={googleMapsConfig.url} onLoad={this.handleScriptLoad} />
      </Container>
    );
  }
};

FormNew.propTypes = {
  auth: PropTypes.shape({
    uid: PropTypes.string
  }),
  form: PropTypes.shape({
    crimeType: PropTypes.string,
    carNumber: PropTypes.string
  }),
  completeLocation: PropTypes.func,
  addComment: PropTypes.func,
  addCrimeType: PropTypes.func,
  addCarNumber: PropTypes.func,
  submitReport: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    form: state.form
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    completeLocation: (place) => dispatch(autocompleteLocation(place)),
    addComment: (text) => dispatch(addComment(text)),
    addCrimeType: (type) => dispatch(addCrimeType(type)),
    addCarNumber: (number) => dispatch(addCarNumber(number)),
    submitReport: () => dispatch(submitReport())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormNew);
