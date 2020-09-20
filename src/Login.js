import React, {useState} from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom"
import { auth } from './firebase.js';

function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')

            })
            .catch(error => alert(error.message))


    }

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            history.push('/');
        })

        .catch(error => alert(error.message))        
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.webernote.net%2Fwp-content%2Fuploads%2F2012%2F04%2Famazon-logo.png%3Fresize%3D670%252C270%26ssl%3D1&f=1&nofb=1"
                alt=""/>
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input 
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />

                    <h5>Password</h5>
                    <input 
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}/>

                    <button onClick={signIn} className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Noitce, 
                    our OCkkies Notice and out Interest-Based Ads Notice.

                </p>

                <button
                onClick={register}
                className="login__registerButton">
                    Create your Amazon  Account

                </button>
            </div>

        </div>
    )
}

export default Login
