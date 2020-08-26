import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51HJEbKGaJFNjFJbgRERZi4cL61W4jKcu2t7glVJAOsPyvK2u0T2ywQ7UdtjyYY0mW26T4jrrptkKyKonSBg609iZ00O1cfVEx0';

    const onToken=token=>{
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;