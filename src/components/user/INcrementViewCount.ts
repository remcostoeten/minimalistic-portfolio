import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

export const incrementViewCount = functions.https.onRequest(async (req, res) => {
    const docRef = admin.firestore().doc('metadata/viewCount');
    await admin.firestore().runTransaction(async (transaction) => {
        const doc = await transaction.get(docRef);
        const newCount = (doc.data()?.count || 0) + 1;
        transaction.update(docRef, { count: newCount });
    });

    res.status(200).send();
});