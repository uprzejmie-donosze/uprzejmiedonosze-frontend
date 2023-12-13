import React from 'react';
import { Container } from '../../styles/styledComponents';

function Landing() {
  return (
    <Container>
      <section>
        <h1>O co chodzi?</h1>
        <p>
          <strong>
            Każdy z nas chce swobodnie i bezpiecznie poruszać się po mieście. 
            Niestety nie zawsze jest to możliwe. Zbyt często, jako piesi, zmuszeni jesteśmy do przeciskania się, 
            chodzenia gęsiego, omijania, wkraczania na jezdnię zza zaparkowanych pojazdów, 
            a nawet ustępowania jeżdżącym po chodnikach samochodom.
          </strong>
        </p>

        <p>
          <strong>Uprzemie Donoszę</strong> to ogólnopolskie rozwiązanie, pomagające w zgłaszeniu przypadków nieprawidłowego parkowania, 
          które wpływają na bezpieczeństwo i komfort pieszych. Zgłoszenie stworzone za pomocą tego serwisu zawiera komplet 
          wymaganych przez Straż Miejską lub Policję informacji. Ułatwia pracę Tobie i służbom.
        </p>

        <p>Zobacz, jakie to proste:</p>

      </section>
    </Container>
  );
}

export default Landing;