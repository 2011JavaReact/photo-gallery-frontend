import Axios from 'axios';
import React from "react";
import { useState } from "react";
import NavBar from '../NavBar';

const SignUp = () => {
    const [formData, setFormdata] = useState({});

    const insertUser = async (e) => {
        e.preventDefault();
        const response = await Axios.post('http://localhost:8080/photo-gallery/register', formData);
        console.log(response);
    }

    const handleChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <body class="text-center text-white bg-dark">
            <NavBar onPage="signup" />
            <section id="photos-form-main">
                <div className="form-wrap">
                    <h1>Sign up</h1>
                    <p>Input a username and password</p>
                    <form onSubmit={insertUser}>
                        <div className="form-group">
                            <label htmlFor="inputTitle">Username</label>
                            <input type="text" className="form-control" id="inputTitle" name="username" placeholder="Enter username..." value={formData["username"]} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordForm">Password</label>
                            <input type="password" className="form-control" name="password" id="passwordForm" placeholder="Enter password..." value={formData["password"]} onChange={handleChange} />
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>
        </body>
    )
}

export default SignUp; 