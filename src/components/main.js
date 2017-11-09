import React, {Component} from 'react';

import Link from './link.component';

class Main extends Component {

    render() {
        return (
            <div className='col-lg-6 offset-lg-3 col-xs-1'>
                <h1>O co chodzi?</h1>
                <p>Każdy z nas chce swobodnie i bezpiecznie poruszać się po mieście. Niestety nie zawsze jest to
                    możliwe. Zbyt często jako piesi zmuszeni jesteśmy do przeciskania się, chodzenia gęsiego, omijania,
                    wkraczania na jednię zza zaparkowanych pojazdów, a nawet ustępowania jeżdżącym po chodnikach
                    samochodom.</p>
                <p>Próbowałaś/eś dzwonić do Straży Miejskiej w swoim mieście? Wiemy jak to działa. Pracownicy SM
                    odwiedzają miejsce zgłoszenia średnio po dziewięciu godzinach i "nie stwierdzają naruszenia" (dane
                    na podstawie badania <Link to='https://web.facebook.com/miastojestnasze'>Miasto jest nasze</Link>).
                    Dokładnie taką samą skuteczność mają aplikacje miejskie w rodzaju warszawskiej
                    <Link to='https://warszawa19115.pl/'>19115</Link>czy szczecińskiej aplikacji
                    <Link to='https://alertszczecin.pl/alert2a'>Alert Szczecin</Link>.</p>

                <h1>Czy to wina Straży Miejskiej?</h1>
                <p>Najwygodniej jest tak stwierdzić, tylko niewiele to daje. SM to najczęściej słabo dotowana służba, z
                    dużymi brakami kadrowymi. Prawocownicy SM są przeciążeni bardzo niewdzięczną pracą. Zwróć uwagę, że
                    dobrego słowa o nich nie powie ani osoba zgłaszająca naruszenia, ani ukarany.</p>

                <h1>Czy coś można z tym zrobić?</h1>

                <p>Na początek trochę historii. W 2015 w Szczecinie z inicjatywy samozwańczego <Link
                    to='https://web.facebook.com/rzecznikpieszych'>Rzecznika Pieszych w Szczecinie</Link> i kawiarni
                    <Link to='https://web.facebook.com/stojaki.szczecin'>Stojaki</Link>, powstała akcja
                    <Link to='http://robtodobrze.org/'>Rób to dobrze</Link>. Była to społeczna akcja mandatowa.</p>
                <p>Dowiedz się więcej czytając historię <Link path='robtodobrze'>Rób to dobrze</Link>.</p>
                <p>Ta akcja wiele nas nauczyła. Przede wszystkim dowiedzieliśmy się, że takie działania trafiają do
                    niewielu. A na pewno nie trafiają do osób nagminnie łamiących przepisy. Ale dowiedzieliśmy się
                    także, że możliwe jest skutecznie zgłoszenie mandatu, wyłącznie na podstawie zdjęcia przekazanego
                    przez mieszkańca miasta. Kluczowa dla Straży Miejskiej jest jakość tych zgłoszeń.</p>

                <h1>Czym ma być Przeparkuj.to?</h1>
                <p>Przeparkuj.to ma być ogólnopolskim rozwiązaniem, pomagającym mieszkańcom w nierównej walce z
                    recydywistami parkowania.</p>
                <p>W założeniu wystarczy zrobić dwa zdjęcia, sprawdzić automatycznie pobrany adres i numer rejestracyjny
                    oraz określić rodzaj naruszenia. Tylko tyle. Straż Miejska nie musi odwiedzać tego miejsca żeby
                    stwierdzić to naruszenie naocznie. Dowód ze zdjęcia wraz twoim oświadczeniem jest wystarczający.</p>
                <p>Zobacz, jak proste to może być:</p>

                <h1>Co jeśli kierowca nie przyjmie mandatu?</h1>
                <p>Wtedy sprawa trafia do sądu a Ty jesteś wezwany na świadka. Sąd dysponuje zdaniem kierowcy kontra
                    twojemu zdaniu wraz z materiałem dowodowym (czyli zrobionymi przez Ciebie zdjęciami).</p>
                <p>OK, nie jest to przyjemne. Ale w założeniu nie jest to aplikacja dla szeryfów, którzy w piętnaście
                    minut wyślą anonimowo pięćdziesiąt zgłoszeń. Używanie tego rozwiązania będzie wiązało się z
                    opisanymi powyżej obowiązkami.</p>

                <h1>Czy to już działa</h1>
                <p>Nie. jeszcze nie. Na razie jest tylko wersja demo. Kliknij w "Zgłoś" powyżej żeby się pobawić.</p>

                <h1>OK, chciał(a)bym pomóc</h1>
                <p>Super! Przeczytaj więcej o <Link path='projekt'>stanie projektu i jak można pomóc</Link>.</p>
            </div>
        );
    }
}

export default Main;
