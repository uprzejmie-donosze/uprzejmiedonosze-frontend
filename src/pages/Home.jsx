import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from '@reach/router';

import { Container } from '../styles/styledComponents';
import { colors } from '../styles/variables';
import Landing from '../components/Landing';

const Home = ({ auth, profile }) => {
  if (!auth.uid) return (
    <Landing />
  );

  return (
    <Container>
      <h1>{`Cześć ${profile.name}!`}</h1>

      <h4>Your statistics</h4>
      {profile.reports && <p>Nomber of reports <span>{profile.reports.length}</span></p>}

      <RoundedLink to='/report/new'>
        <Icon width="20px" height="20px" viewBox="0 0 92 92">
          <path fill="currentColor" id="XMLID_1259_" d="M86.1,9.2L79,1.9C78.4,1.3,77.6,1,76.8,1h0c-0.8,0-1.6,0.3-2.1,0.9L32.8,44.4c-0.3,0.3-0.5,0.6-0.7,1
            l-4.7,11.9c-0.4,1.1-0.2,2.4,0.7,3.2c0.6,0.6,1.3,0.9,2.1,0.9c0.4,0,0.7-0.1,1.1-0.2l11.8-4.7c0.4-0.2,0.7-0.4,1-0.7l41.9-42.5
            C87.3,12.2,87.3,10.3,86.1,9.2z M40.4,51.2l-4.8,1.9l1.9-4.9L76.8,8.3l3,3L40.4,51.2z M71,47.6V88c0,2.2-2,4-4.2,4H10
            c-2.2,0-4-1.8-4-4V11.8C6,9.6,7.8,8,10,8h41.6c2.2,0,4,1.8,4,4s-1.8,4-4,4H14v68h49V47.6c0-2.2,1.8-4,4-4S71,45.4,71,47.6z"/>
        </Icon>
      </RoundedLink>
    </Container>
  );
};

Home.propTypes = {
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

const RoundedLink = styled(Link)`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  color: ${colors.white};
  background: ${colors.primary};
`;

const Icon = styled.svg`
  position: absolute;
  top: calc((100% - 20px) / 2);
  left: calc((100% - 20px) / 2);
`;

export default connect(mapStateToProps)(Home);
