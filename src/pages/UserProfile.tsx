import React from "react";
import { withAuth } from "../config";
import { useAppSelector } from "../store";

function UserProfilePage() {
  const user = useAppSelector((state) => state.user);
  const photoURL = useAppSelector((state) => state.firebase.auth.photoURL);

  return (
    <section>
      <h1>{user.profile.data.name}</h1>

      <figure style={{ display: "flex", margin: 0 }}>
        <img src={photoURL} style={{ maxWidth: "200px" }} />

        <figcaption style={{ paddingLeft: "20px" }}>
          <h3>{user.profile.data.email || "No email added"}</h3>
        </figcaption>
      </figure>
    </section>
  );
}

export const UserProfile = withAuth(UserProfilePage);
