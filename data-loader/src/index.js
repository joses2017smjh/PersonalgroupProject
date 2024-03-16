// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import hash from "object-hash";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTUWKsoImm-tKlZ0b6PgENkTgSVb_3DR0",
  authDomain: "osu-bathrooms-app.firebaseapp.com",
  projectId: "osu-bathrooms-app",
  storageBucket: "osu-bathrooms-app.appspot.com",
  messagingSenderId: "596326357253",
  appId: "1:596326357253:web:11e5963c8c998f996a3f6c",
  measurementId: "G-VTT4DK7M14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
console.log(db);
// setDoc(doc(db, "Bathroom", "NewDocTest"), { data: "asdfsfsdfdsfdsfsdsdf" });

async function main() {
  const bathroomsData = await (await fetch("bathrooms.json")).json();

  for (const { value, display, building } of bathroomsData) {
    const singleBathroomDoc = {
      building_name: building,
      gender: display.endsWith(" Women's")
        ? "FEMALE"
        : display.endsWith(" Men's")
        ? "MALE"
        : "INCLUSIVE",
      rating: 0,
      room_number: display.match(/^\S+/g)?.[0],
      wheelchair_accessible: false, // defaults to false; self-reported?
    };
    setDoc(
      doc(db, "Bathroom", hash({ value, display, building })),
      singleBathroomDoc
    );
  }
}

main();
