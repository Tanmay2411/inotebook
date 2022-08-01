import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `http://localhost:5000/api/auth/login`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })

        });
        const json = await response.json();
        // console.log(json);
        if (json.success) {
            localStorage.setItem("token", json.token)
            console.log(json.token)
            navigate('/')
            props.showAlert("success", "You are successfully logged in")
        }
        else {
            props.showAlert("danger", "Please Enter Valid Credentials!!")
        }

    }
    const onClick = () => {
        navigate('/signup')
    }
    return (
        <div className='container my-4'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="input1 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={onChangeEmail} />

                </div>
                <div className="form-group my-2">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="input1 form-control" id="exampleInputPassword1" placeholder="Password" onChange={onChangePassword} />
                </div>

                <button type="submit" className="btn btn-primary my-2">Login</button>
            </form>
            Don't have an account? <button className='input1' onClick={onClick} style={{
                "textDecoration": "underline",
                "fontWeight": "500",
                "backgroundColor": "white",
                "border": "none",
                "paddingLeft": "0px",
                "color": "#475596"
            }}>Sign Up here ;)</button>
        </div >
    )
}

export default Login