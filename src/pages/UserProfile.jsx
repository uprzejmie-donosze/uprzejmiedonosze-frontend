import React from 'react';
import { useSelector } from 'react-redux';
import { withAuth } from '../config';

function UserProfile() {
  const profile = useSelector(state => state.firebase.profile);

  return (
    <section>
      <h1>{profile.name}</h1>

      <figure style={{display: 'flex', margin: 0 }}>
        <img src={profile.photoURL} style={{maxWidth: "200px" }} />

        <figcaption style={{ paddingLeft: "20px" }}>
          <h3>{profile.email || 'No email added'}</h3>
        </figcaption>
      </figure>
    </section>
  );
};

export default withAuth(UserProfile);
