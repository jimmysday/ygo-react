// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore'

// Use this code snippet in your app.
// If you need more information about configurations or implementing the sample code, visit the AWS docs:
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started.html

import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

const secret_name = "prod/app/myreactnative";

const client = new SecretsManagerClient({
  region: "us-east-2",
});
let secret;
async function initFirebase() {

let response;



try {
  response = await client.send(
    new GetSecretValueCommand({
      SecretId: secret_name,
      VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
    })
  );
} catch (error) {
  // For a list of exceptions thrown, see
  // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
  throw error;
}

secret = response.SecretString;


// Your code goes here
// Your web app's Firebase configuration

}
// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_ID,
//     appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
// };
initFirebase();
const firebaseConfig = {
    apiKey: secret.apiKey ,
    authDomain: secret.authDomain,
    projectId: secret.projectId,
    storageBucket: secret.storageBucket,
    messagingSenderId: secret.messagingSenderId,
    appId: secret.appId,
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const userRef = collection(db, 'users');

export const contactCollection = collection(db, 'contacts');

export const threadsCollection = collection(db, 'threads');

export const pillarRef = collection(db, 'pillars');

// const firebaseConf = {app, db, auth};

// export default firebaseConf;