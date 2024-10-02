// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { env } from './env';
import { initializeApp } from 'firebase/app';
import { credential } from 'firebase-admin';
import admin from 'firebase-admin';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const firebaseApp = initializeApp(env.firebase);
admin.initializeApp({
    credential: credential.applicationDefault(),
    databaseURL: `https://${env.admin.project_id}.firebaseio.com`,
});

export const analytics = getAnalytics(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const adminAuth = admin.auth();
export const adminFirestore = admin.firestore();

export const firestoreConfig = {
    collection: {
        transaction_summary: 'transactions_summary',
        transaction: "transaction"
    },
}
