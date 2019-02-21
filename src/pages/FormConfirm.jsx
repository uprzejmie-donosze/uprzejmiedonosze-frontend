import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link, navigate } from '@reach/router';

import { Container } from '../styles/styledComponents';

import { getFormData } from '../store/actions/formActions';

class FormConfirm extends Component {
  goBack = () => {
    navigate('/app/report/new');
  };

  componentDidMount() {
    if (this.props.auth.uid) {
      this.props.getFormData(this.props.raportId);
    }
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
          <p>{`W dniu ${form.date} roku o godzinie ${form.date} byłam świadkiem pozostawienia samochodu o nr rejestracyjnym ${form.carInfo.plateId} pod adresem ${form.address.address}.`}</p>
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
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", position: "fixed", width: "100%", left: '0', bottom: '0', padding: "1rem", background: "white"}}>
          <button style={{background: 'white'}} onClick={() => this.goBack()}>back</button>
          <Link style={{background: 'white'}} to="/app/report/confirmation">confirm</Link>
        </div>
      </div>
    );

    return (
      <Container>
        {form.user ? renderContent() : <p>waiting for content</p>}
      </Container>
    );
  }
};

FormConfirm.propTypes = {
  auth: PropTypes.shape({
    uid: PropTypes.string
  }),
  getFormData: PropTypes.func,
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
    getFormData: (reportId) => dispatch(getFormData(reportId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormConfirm);
