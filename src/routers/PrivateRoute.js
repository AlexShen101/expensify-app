import React from 'react'
import { connect } from 'react-redux'
import {
    Route,
    Redirect
} from 'react-router-dom'
import Header from '@Components/Header'

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <div>
                    <Header loggedIn={true} />
                    <Component {...props} />
                </div>
            ) : (
                <div>
                    <Redirect to="/" />
                </div>
            )
        )} />
    )
}


const mapStateToProps = ((state) => {

    return {
        isAuthenticated: !!state.auth.uid
    }
})

export default connect(mapStateToProps)(PrivateRoute)