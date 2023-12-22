import React from "react";
import { withAuth } from "../config";
import { useAppSelector } from "../store";

function UserRegistrationPage() {
  const isUserRegistered = useAppSelector(
    (state) => state.user.profile.isRegistered,
  );

  return (
    <section>
      <h1>Rejestracja</h1>
      {!isUserRegistered && (
        <div>
          <p>
            <strong>Ostatni krok!</strong>
          </p>
          <p>
            Proszę dokończ rejestrację aby kontynuować jako zalogowany
            użytkownik.
          </p>
        </div>
      )}
    </section>
  );
}

export const UserRegistration = withAuth(UserRegistrationPage);
