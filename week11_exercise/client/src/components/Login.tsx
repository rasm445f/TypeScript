import React from "react"
import {ThemeContext} from "../contexts/ThemeContext";
import {UserContext} from "../contexts/UserContext";



function Login({}) {
    const {isDark, black, white} = React.useContext(ThemeContext);
    const theme = isDark ? black : white;

    const {isLoggedin, email, password, roles} = React.useContext(UserContext);
    const user = isLoggedin ? "You are logged in" : "Not logged in";
    let hiddenText = ""
    if(isLoggedin === true && roles.role == "admin"){
        hiddenText = "HIdden text"
    }else{
        hiddenText = ""
    }

    return (
        <>
            <form >
                <input placeholder="Username" style={{backgroundColor: theme.backgroundColor, color: theme.color}}  id="username" />
                <input placeholder="Password" style={{backgroundColor: theme.backgroundColor, color: theme.color}} id="password" />

                <p>{user}</p>
                <p>{roles.role}</p>
                <p>{hiddenText}</p>
            </form>
        </>
    )
}
export default Login;