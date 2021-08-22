import React from 'react';
import styled  from 'styled-components';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const LoginInnerContainer = styled.div`

    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a4d40 !important;
        color: white;
    }

`;


export const Login = () => {

    const singIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img
                    src="https://cdn.brandfolder.io/5H442O3W/at/pl546j-7le8zk-6gwiyo/Slack_Mark.svg"
                    alt="Slack Mark"
                />
                <h1>Sing in to  Frontend HQ</h1>
                <p>frontend.slack.com</p>

                <Button onClick={singIn}>
                    Sing in with Google
                </Button>

            </LoginInnerContainer>
        </LoginContainer>
    )
}
