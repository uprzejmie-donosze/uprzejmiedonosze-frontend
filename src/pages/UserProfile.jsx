import React from 'react';
import { useSelector } from 'react-redux';
import { withAuth } from '../config';

function UserProfilePage() {
  const auth = useSelector(state => state.firebase.auth);

  return (
    <section>
      <h1>{auth.displayName}</h1>

      <figure style={{display: 'flex', margin: 0 }}>
        <img src={auth.photoURL} style={{maxWidth: "200px" }} />

        <figcaption style={{ paddingLeft: "20px" }}>
          <h3>{auth.email || 'No email added'}</h3>
        </figcaption>
      </figure>
    </section>
  );
};

export const UserProfile = withAuth(UserProfilePage);
