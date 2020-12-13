import Axios from 'axios';
import React, { useEffect } from "react";
import { useState } from "react";
import NavBar from '../NavBar';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import Footer from '../Footer';

const AddPhotos = /*(logout, loggedin)*/ () => {
    const [formData, setFormdata] = useState({});
    const user = useSelector(store=>store);

    console.log(user);

    // const insertPhoto = async (e) => {
    //     e.preventDefault();
    //     const URL = `http://localhost:8080/photo-gallery/photos?title=${formData["title"]}&address=${formData["address"]}`
    //     const response = await Axios.post('http://localhost:8080/photo-gallery/photos', formData);
    //     console.log(response);
    // }

    const insertPhoto = async (e) => {
        e.preventDefault();
        const url = `http://localhost:8080/photo-gallery/photos?title=${formData["title"]}&address=${formData["address"]}`
        Axios.post(url, {}, {withCredentials: true}).then((resp) => {
            console.log('Post response', resp);
        });
    };

    const handleChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        //this doesn't work... 
        if (localStorage.getItem('user') === null){
            console.log('in here');
            <Redirect to='/login'/>;
        }
        console.log('User: ' + localStorage.getItem('user'));
    }, []);

    if (localStorage.getItem('user') === null){
        console.log('in here');
        return <Redirect to='/login'/>;
    }
    else{
        return (
            <body className="text-center text-white bg-dark">
                <NavBar onPage="addphotos" />
                <section id="photos-form-main">
                    <div className="form-wrap">
                        <h1>Post a new photo, {localStorage.getItem('user')}!</h1>
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
                <Footer/>
            </body>
        )
    }
}

export default AddPhotos; 