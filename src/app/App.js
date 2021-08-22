import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import styled  from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase';

import { Chat } from './components/Chat';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Login } from './components/Login';

var Spinner = require('react-spinkit');




const AppBody = styled.div`
  display: flex;
  height: 100vh;
  
`;

const AppLoading = styled.div`
 display: grid;
 place-items: center;
 height: 100vh;
 width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    width: 150px;
    padding: 20px;
    margin-bottom: 40px;
  }

`;


function App() {

  const [user, loading] = useAuthState(auth)

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img

              src="https://cdn.brandfolder.io/5H442O3W/at/pl546j-7le8zk-6gwiyo/Slack_Mark.svg"
              alt="Slack Mark"
          />

          <Spinner 
            name='ball-spin-fade-loader' 
            color="purple" 
            fadeIn="none"
          />

        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ):(
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
        
      </Router>
    </div>
  );
}

export default App;
