import stripeLoader from 'stripe'
const stripe = stripeLoader(process.env.STRIPE_SK)

function charge(token, amt) {

    return stripe.charges.create({
        amount: amt * 100,
        currency: 'usd',
        source: token,
        description: 'Statement description'
    })
}

export { charge }