import React, { Component } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';

import InjectedCheckoutForm from './checkoutForm'; 

class Donate extends Component {

    render(){
        return (
            <StripeProvider apiKey='pk_test_iEYeOagxyQheyJsYMSR1rMga'>
                <Elements>
                    <InjectedCheckoutForm />
                </Elements>
            </StripeProvider>
        )
    }
}

export default Donate;