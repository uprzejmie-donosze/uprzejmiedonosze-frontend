import React, {Component} from 'react';

import Link from './link.component';
import Accordion from './accordion.component';

class Main extends Component {

    render() {
        return (
            <div>
                <div className='top'>
                    <div className='container topContainer'>
                        <div className='row'>Logo & login</div>
                        <div className='row'></div>
                    </div>
                </div>
                <div className='content'>
                    <div className='container'>
                        <div className='row'>
                                <h1>Jak działa Uprzejmie Donoszę?</h1>
                        </div>
                        <div className='row'>Lorem ipsum</div>
                    </div>
                </div>
                <div className='content'>
                    <div className='container'>
                        <div className='row'>
                            <h1>Jak powstało Uprzejmie Donoszę?</h1>
                            <p>Uprzejmie Donoszę ma być ogólnopolskim rozwiązaniem, pomagającym mieszkańcom w nierównej
                                walce z recydywistami parkowania.</p>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'><p>Uprzejmie Donoszę ma być ogólnopolskim rozwiązaniem,
                                pomagającym mieszkańcom w nierównej walce z recydywistami parkowania.</p></div>
                            <div className='col-md-4'><p>Uprzejmie Donoszę ma być ogólnopolskim rozwiązaniem,
                                pomagającym mieszkańcom w nierównej walce z recydywistami parkowania.</p></div>
                            <div className='col-md-4'><p>Uprzejmie Donoszę ma być ogólnopolskim rozwiązaniem,
                                pomagającym mieszkańcom w nierównej walce z recydywistami parkowania.</p></div>
                        </div>
                    </div>
                </div>
                
                <div className='background'>
                    <section className='segment'>
                        <h1 className='segment__title segment__title--centered'>Wszystko, co powinieneś wiedzieć o aplikacji</h1>
                        <Accordion />
                    </section>
                </div>

                <div className='content'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'><h2>Zobacz, gdzie działa aplikacja</h2>
                            <p>
                                <ul>
                                    <li>Warszawa</li>
                                    <li>Szczeciń</li>
                                    <li>Poznań</li>
                                </ul>
                            </p>
                            </div>
                            <div className='col-md-6'>
                                Mapka
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
