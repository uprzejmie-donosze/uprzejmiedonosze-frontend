import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link, navigate } from '@reach/router';
import Moment from 'react-moment';
import moment from 'moment';

import { Container, Layout } from '../styles/styledComponents';

import { getFormData, submitReport } from '../store/actions/formActions';
import Navbar from '../components/layout/Navbar/Navbar';
import FormNavigation from '../components/form/FormNavigation';

class FormConfirm extends Component {
  componentDidMount() {
    if (this.props.auth.uid) {
      this.props.getFormData(this.props.raportId);
    }

    moment.locale('pl');
  }

  render() {
    const { form, auth } = this.props;
    if (!auth.uid) return <Redirect from="/report/new" to='login' noThrow />;

    const renderContent = () => (
      <div>
        <div>
          <span style={{color: 'lightgray'}}>New report &gt; </span>
          <span style={{color: '#34dd7eff'}}>Confirm &gt; </span>
          <span style={{color: 'lightgray'}}>Confirmation</span>
        </div>

        <h1>Jeszcze chwila</h1>
        <p>Sprawdź dane przed zapisaniem zgłoszenia. Nie obawiaj się – na tym etapie nic jeszcze nie zostanie wysłane do SM.</p>

        <div>
          <h4>Zgłoszenie wykroczenia</h4>
          <p>
            <span>W dniu </span>
            <strong><Moment format="DD MMMM YYYY">{form.date}</Moment></strong>
            <span> roku o godzinie </span>
            <strong><Moment format='HH:mm'>{form.date}</Moment></strong>
            <span> byłam świadkiem pozostawienia samochodu o nr rejestracyjnym </span>
            <strong><span>{form.carInfo.plateId || form.carInfo.plateIdFormImage}</span></strong>
            <span> pod adresem </span>
            <strong><span>{form.address.address}</span></strong>
          </p>

          <p>Zdjęcia wykonałam samodzielnie.</p>
          <p>Nie byłam świadkiem samego momentu parkowania, oraz nie wiem jak długo pozostawał pojazd pozostawał na tym miejscu.</p>
          <p>{form.comment}</p>
          <p>Jestem świadoma odpowiedzialności karnej z art. 233 §1–§3 Kodeksu karnego oraz treści art. 182, 183 i 185 Kodeksu Postępowania Karnego.</p>
          <p>Równocześnie proszę o niezamieszczanie w protokole danych dotyczących mojego miejsca zamieszkania.</p>
          <p>Dane adresowe oraz kontaktowe zgłaszającego:</p>
          <p>{form.user.name}</p>
          <p>{form.user.email}</p>
          <p>{form.user.address}</p>
          <img src={form.contextImage}/>
          <img src={form.carImage}/>
          <img src={form.carInfo.plateImage}/>
        </div>

        <FormNavigation
          backTo='app/report/new'
          text='Potwierdź'
          action={this.props.submitForm}
        />
      </div>
    );

    return (
      <Layout>
        <Navbar />

        <Container>
          {form.user && form.date ? renderContent() : <p>waiting for content</p>}
        </Container>
      </Layout>
    );
  }
};

FormConfirm.propTypes = {
  auth: PropTypes.shape({
    uid: PropTypes.string
  }),
  getFormData: PropTypes.func,
  submitForm: PropTypes.func,
  raportId: PropTypes.string,
  form: PropTypes.shape({
    id: PropTypes.string,
  })
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    form: state.form.formData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFormData: (reportId) => dispatch(getFormData(reportId)),
    submitForm: () => dispatch(submitReport())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormConfirm);
