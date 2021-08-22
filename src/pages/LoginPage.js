import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebase, googleAuthProvider } from '../firebase/firebase'

import Header from '../components/Header'

const LoginPage = (props) => {

    const startLogin = () => {
        firebase.auth().signInWithPopup(googleAuthProvider)
    }

    return (
        <div>
            <h2>Please log into an account.</h2>
            <button onClick={startLogin}>Login</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);
