const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://influis-1-default-rtdb.firebaseio.com/",
});

const db = admin.firestore();
const auth = admin.auth();

module.exports = { admin, db, auth };
