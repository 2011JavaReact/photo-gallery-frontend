import Axios from 'axios';
import React, { useEffect } from "react";
import { useState } from "react";
import NavBar from '../NavBar';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const AddPhotos = (logout, loggedin) => {
    const [formData, setFormdata] = useState({});
    const user = useSelector(store=>store);

    const insertPhoto = async (e) => {
        e.preventDefault();
        const response = await Axios.post('http://localhost:8080/photo-gallery/photos', formData);
        console.log(response);
    }

    const handleChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        console.log(loggedin);
        if(!loggedin){
            <Redirect to='/login'/>;
        }
    }, []);

    return (
        <body class="text-center text-white bg-dark">
            <NavBar onPage="photos" logout={logout} />
            <section id="photos-form-main">
                <div className="form-wrap">
                    <h1>Post a new photo, {user.username}!</h1>
                    <p>Name the photo and add a link</p>
                    <form onSubmit={insertPhoto}>
                        <div className="form-group">
                            <label htmlFor="inputTitle">Title</label>
                            <input type="text" className="form-control" id="inputTitle" name="title" placeholder="Enter title..." value={formData["title"]} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pirate-role">Photo URL</label>
                            <input type="text" className="form-control" name="photo" placeholder="Enter URL..." value={formData["address"]} onChange={handleChange} />
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>
        </body>
    )
}

export default AddPhotos; 