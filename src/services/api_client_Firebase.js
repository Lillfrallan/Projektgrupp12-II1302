import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, deleteObject, ref, getDownloadURL } from "firebase/storage";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import {API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID} from './scripts'

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId:  PROJECT_ID,
    storageBucket:  STORAGE_BUCKET,
    messagingSenderId:  MESSAGING_SENDER_ID,
    appId:  APP_ID,
    measurementId: MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage();
const auth = getAuth(app);

/**
 * 
 * @param {String} IMAGE 
 * @returns the image url
 */
const get_image_url = (IMAGE) => {
    return `https://firebasestorage.googleapis.com/v0/b/projectgroup12-2f2a2.appspot.com/o/images%2F${IMAGE}?alt=media`;
}

/**
 * Deletes the image from firebase
 * @param {String} IMAGE 
 */
const delete_image = (IMAGE) => {
    const deleteRef = ref(storage, `images/${IMAGE}`)
    deleteObject(deleteRef)
}

/**
 * Downloads the image from firebase
 * @param {String} IMAGE 
 */
const download_image = (IMAGE) => {
    const downloadRef = ref(storage, `images/${IMAGE}`)

    getDownloadURL(downloadRef)
    .then((url) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob'
        xhr.onload = (event) => {
            const blob = xhr.response;
        }
        xhr.open('GET', url)
        xhr.send()
    })
}

export  {
    get_image_url, 
    delete_image, 
    download_image,  
    firebaseConfig, 
    app, 
    analytics, 
    storage, 
    getDownloadURL, 
    ref,
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} 