import firebase from 'firebase'


const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyD7FCRuvuzuqtCKS-P7BFI4Jl2AAVA1cNI",
    authDomain: "librapp-project.firebaseapp.com",
    projectId: "librapp-project",
    storageBucket: "librapp-project.appspot.com",
    messagingSenderId: "604813397785",
    appId: "1:604813397785:web:49b94881cdccbdf58a3f88"
})

const db = firebaseApp.firestore()

export { db }