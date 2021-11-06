const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JspHNSGI11PnBzbLXMd3AeKMZ4VvXbs9htHxDXaxnlAx7J3QLR0ge5zzbBbzZ2k7SGTNcgXd8PKTa2RDHiWxJFg00PkJlq4ZW"
);
//API
//-app config
const app = express();
//-middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request recived,for amount : ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  //res-status
  response.status(201).send({
    clientSecrete: paymentIntent.client_secret,
  });
});

//-Listen command
exports.api = functions.https.onRequest(app);
