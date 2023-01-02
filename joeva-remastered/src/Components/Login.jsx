import React from "react";
import { useDispatch } from "react-redux";
import { sendLoginInfo } from "../Actions/sendLoginInfo";

export const Login = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <form action="login">
            <div>
                <h2>Username</h2>
                <input type="username" />
            </div>
            <div>
                <h2>Password</h2>
                <input type="password" />
            </div>
            <div>
                <button onClick={(e) => sendLoginInfo(dispatch, e)}>Login</button>
            </div>
        </form>
    </div>
  );
};
