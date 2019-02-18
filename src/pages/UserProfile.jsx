import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link, Redirect } from '@reach/router';

import { Container } from '../styles/styledComponents';

const UserProfile = ({ auth, profile }) => {
  if (!auth.uid) return <Redirect from="/user/:userId" to='login' noThrow />;

  return (
    <Container>
     <section>
        <img src={profile.photoURL} style={{maxWidth: "200px" }}/>
       <h1>{profile.name}</h1>
       <h3>{profile.email || 'No email added'}</h3>

       <p>{profile.address || 'No address added'}</p>
       <p>{profile.IDnumber || 'No ID number added'}</p>
       <p>{profile.msisdn || 'No phone number added'}</p>
     </section>
    </Container>
  );
};

UserProfile.propTypes = {
  auth: PropTypes.shape({
    uid: PropTypes.string
  }),
  profile: PropTypes.shape({
    name: PropTypes.string
  })
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(UserProfile);
