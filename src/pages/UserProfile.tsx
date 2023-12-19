import React from "react";
import { withAuth } from "../config";
import { useAppSelector } from "../store";

function UserProfilePage() {
  const auth = useAppSelector((state) => state.firebase.auth);

  return (
    <section>
      <h1>{auth.displayName}</h1>

      <figure style={{ display: "flex", margin: 0 }}>
        <img src={auth.photoURL} style={{ maxWidth: "200px" }} />

        <figcaption style={{ paddingLeft: "20px" }}>
          <h3>{auth.email || "No email added"}</h3>
        </figcaption>
      </figure>
    </section>
  );
}

export const UserProfile = withAuth(UserProfilePage);
