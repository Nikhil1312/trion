import { ChatEngine } from 'react-chat-engine';
import { useState } from 'react';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    const[isLoggedin,setIsLoggedin]=useState(false)
    // if(!localStorage.getItem('username')) return <LoginForm isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
    if(!isLoggedin) return <LoginForm isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
    return (
        <ChatEngine
            height = "100vh"
            projectID = "eb425b17-30d0-41de-9747-4ab3e664b3f5"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed setIsLoggedin={setIsLoggedin} {...chatAppProps} />}
            />
    )
}

export default App;