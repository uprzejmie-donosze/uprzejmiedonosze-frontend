import React, {Component} from 'react';

class Foot extends Component {

    render() {
        return (
            <div className='footer content'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <h4>Regulamin</h4></div>
                        <div className='col-md-3'><h4>Chcę pomóc</h4></div>
                        <div className='col-md-3 offset-md-3'>
                            <h4>Kontakt</h4>
                            <p>szymon@nieradka.net</p>
                        </div>
                    </div>
                    <div className='row'>Copyright Uprzejmie Donoszę 2018</div>
                </div>
            </div>
        );
    }
}

export default Foot;
