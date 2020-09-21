const functions = require('firebase-functions');

const express = require("express");
const cors = require("cors")

const stripe = require('stripe')('sk_test_51HTRQIErO53dUqrx1vUS8O8uMZyeVVBczHQJT1MCHSMQyEPa7RV8uT4WAX0lNa8yca7YM8IwDAe32UVfpEDKs8zu007xWPoMqB')

// API


// - API config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());



// - API routes
app.get('/', (request, response) => response.status(200).send('hello dude'))

app.post('/payments/create', async(request, response)=>{
    const total = request.query.total;

    console.log('my total is >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-2f5f7/us-central1/api