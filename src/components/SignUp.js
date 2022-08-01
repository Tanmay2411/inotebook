import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
const SignUp = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [toggle, setToggle] = useState(false)
    const onChangeName = (e) => {
        setName(e.target.value)
        // console.log(e);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
        // console.log(e);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
        // console.log(e);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `http://localhost:5000/api/auth/createUser`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })

        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem("token", json.token)
            console.log(json.token)
            // alert(json.token)
            navigate('/')
            props.showAlert("success", "Your Account has been successfully created!")
        }
        else {
            props.showAlert("danger", `Please enter your details properly!`)
        }
    }
    return (
        <div>
            <div className='container my-4' style={{ width: "50%" }}>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Name">Name</label>
                        <input type="text" className="input form-control" id="Name" aria-describedby="nameHelp" placeholder="Enter name" value={name} onChange={onChangeName} />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="input form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={onChangeEmail} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type={toggle ? "text" : "password"} className="input form-control" id="exampleInputPassword1" placeholder="Password" onChange={onChangePassword} />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={() => {
                            setToggle(toggle ^ true ^ false);
                        }} />
                        <label className="input form-check-label" htmlFor="flexCheckDefault">
                            Show Password
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary my-2">Submit</button>
                </form>
            </div></div>
    )
}

export default SignUp