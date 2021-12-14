import React, { useState, useEffect } from 'react'

interface Props {
    username: string
    password?: string
    isLoggedIn: boolean
}

export let user = {
    // moet nog verbonden worden met props van een create account component 
    username: 'Ynte',
    password: '123'
}


const Login: React.FC<Props> = ({username, password}: Props) => {
    const [userName, setUserName] = useState({
        username: ''
    })

    const [passWord, setPassword] = useState({
        password: ''
    })

    const [IsLoggedIn, setIsLoggedIn] = useState({
        isLoggedIn: false
    })

    useEffect(() => {
        localStorage.setItem("username", JSON.stringify(user.username))
    })
    
 
    function logIn () {
        if (userName.username !== user.username || passWord.password !== user.password) {
            alert('Your username or password is incorrect')
            return 
        } else {
            alert('Welcome '+ user.username)
            setIsLoggedIn({...IsLoggedIn, isLoggedIn: true})                   
        }   
    }

     if (IsLoggedIn.isLoggedIn === false) {
        document.body.style.overflowY = 'hidden'
    } else {
        document.body.style.overflowY = 'visible'
    } 

    return (
        <div>
            <h1>Whisper</h1>
            <form className="login">
                <h3>Username:</h3>
                <input type="text" value={userName.username} onChange={(e) => setUserName({...userName, username: e.target.value})} placeholder="Enter your username..." />
                <h3>Password:</h3>
                <input type="text" value={passWord.password} onChange={(e) => setPassword({...passWord, password: e.target.value})} placeholder="Enter your password..." />
                <button type="button" onClick={logIn}>Login</button>
            </form>        
        </div>      
    )
}

export default Login