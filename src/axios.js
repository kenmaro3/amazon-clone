import axios from "axios"

const instance = axios.create({
    baseURL: "https://us-central1-clone-2f5f7.cloudfunctions.net/api" // THE API URL (cloud function)
});


// baseURL: "http://localhost:5001/clone-2f5f7/us-central1/api" // THE API URL (cloud function)
// https://us-central1-clone-2f5f7.cloudfunctions.net/api

export default instance;