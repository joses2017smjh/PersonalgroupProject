/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
admin.initializeApp();

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.getLocationToken = onRequest(async (request, response) => {
  const secretsDoc = await admin.firestore().doc("/Secrets/Secrets").get();

  const secrets = secretsDoc.data();

  console.log(secrets);

  const auth = await (
    await fetch(`https://api.oregonstate.edu/oauth2/token`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `client_id=${secrets.osu_locations_key}&client_secret=${secrets.osu_locations_secret}&grant_type=client_credentials`,
    })
  ).json();

  response.end(JSON.stringify(auth));
});
