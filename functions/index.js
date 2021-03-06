const functions = require('firebase-functions');
const admin= require('firebase-admin')

admin.initializeApp(functions.config().firebase)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const createNotification=(notification)=>{
    return admin.firestore().collection('notifications').add(notification)
    .then(doc=>console.log('notification added',doc))
}


exports.chatCreated = functions.firestore.document('chats/{chatId}').onCreate(doc=>{
    const chat=doc.data()
    const notification={
        content:'Recieved a message',
        time: admin.firestore.FieldValue.serverTimestamp(),
        chat
    }

    return createNotification(notification)
})