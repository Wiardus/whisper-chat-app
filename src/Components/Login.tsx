import React, { useState } from 'react'

interface Props {
    username: string
    password?: string
    isLoggedIn: boolean
}

let user = {
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

    console.log(IsLoggedIn)

    return (
        <div>
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