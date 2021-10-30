const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")("sk_test_51HQ1oqB0Z0nVhfUaLJl1vtOUgXDRonzKcZ6w42SPnSIOvJujPZnAEaYuKQLbesTg0LzKmzFgzPBKedOJ7qQX5Cuy006I2akPp1")
                                  // secret key
const app = express();
app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (req, res)=> 
     res.status(200)
     .send("Hello from Cloud")
    
     );

 app.post("/payments/create", async (req, res) => {
     const total = req.query.total;

     console.log("Payment Request Recieved wow!!! for this amount >>> ", total);
     
     const paymentIntent = await stripe.paymentIntents.create({
         amount: total,
         currency: "usd",
     });

     res.status(201).send({
         clientSecret: paymentIntent.client_secret,
     })
 })    

 //http://localhost:5001/clone-9f3d0/us-central1/api
     exports.api = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
