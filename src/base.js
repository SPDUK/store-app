import Rebase from 're-base';
import firebase from 'firebase'


const config  = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTHDOMAIN,
        databaseURL: process.env.REACT_APP_DATABASEURL,
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())
const twitterProvider = new firebase.auth.TwitterAuthProvider()
const githubProvider = new firebase.auth.GithubAuthProvider()



export {app, base, twitterProvider, githubProvider};

