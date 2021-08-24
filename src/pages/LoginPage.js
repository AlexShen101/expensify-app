import React from 'react';
import { connect } from 'react-redux';
import { firebase, googleAuthProvider } from '../firebase/firebase'

const LoginPage = (props) => {

    const startLogin = () => {
        firebase.auth().signInWithPopup(googleAuthProvider)
    }

    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h2>Please log into an account.</h2>
                <button onClick={startLogin} className="btn btn__login btn--centered">Login</button>
            </div>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);
