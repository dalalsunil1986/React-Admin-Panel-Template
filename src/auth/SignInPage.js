import React from 'react'
import { TextField } from "@material-ui/core";
import Button from "../components/button/Button"
import "./SignInPage.css"
const SignInPage = () => {
    return (
        <div className="container-center">
            <div className="signin-card">
                <h1>Sign In Page</h1>
                <TextField
                    className="input"
                    style={{
                        marginTop: 10
                    }}
                    type="email"
                    label="EMail"
                    variant="filled" /><br/>
                <TextField
                    className="input"
                    style={{
                        marginTop: 10,
                        marginBottom: 10
                    }}
                    type="password"
                    label="Password"
                    variant="filled" /><br/>

                <Button
                    
                    text="Login"
                    onClick={() => { }}
                />
            </div>
        </div>
    )
}

export default SignInPage
