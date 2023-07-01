import React from "react";
import { useHistory } from "react-router-dom";
//import Home from "./pages/Home";
  
function Login() {
    let history = useHistory();

    return (
        <div>
            <input type="text" placeholder="username"/><br/><br/>
            <input type="txet" placeholder="password"/><br/><br/>
            <button 
            onClick={() => {
                history.push("./components/header/Header");
            }}
            >
            Login
            </button>
        </div>
    );
}
export default Login;