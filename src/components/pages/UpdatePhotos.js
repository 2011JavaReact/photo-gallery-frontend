import Axios from 'axios';
import React from "react";
import { useState } from "react";
import NavBar from '../NavBar';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import Footer from '../Footer';

//The update form displayed when user clicks on a photo they posted 
//Information passed in the props is the title and id of the corresponding photo.
//Verification of whether the user is logged in is not present in the backend so this is exploitable
const UpdatePhotos = /*(logout, loggedin)*/ (props) => {
    const [formData, setFormdata] = useState({});
    const user = useSelector(store=>store);

    console.log(user);

    const insertPhoto = async (e) => {
        e.preventDefault();
        console.log("props: ", props.location.aboutProps);
        const newtitle = formData["title"];
        const url = `http://localhost:8080/photo-gallery/photos?id=${props.location.aboutProps.id}&newTitle=${formData["title"]}`
        Axios.put(url, {}, {withCredentials: true}).then((resp) => {
            console.log(resp);
            alert('Updated title!');
        });
    }

    const handleChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value });
    }

    // useEffect(() => {
    //     //this doesn't work... 
    //     if (localStorage.getItem('user') === null){
    //         console.log('in here');
    //         // <Redirect to='/login'/>;
    //     }
    //     console.log('User: ' + localStorage.getItem('user'));
    // }, []);

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
                        <h1>Update your photo, {localStorage.getItem('user')}!</h1>
                        <p>Name the photo and add a link</p>
                        <form onSubmit={insertPhoto}>
                            <div className="form-group">
                                <label htmlFor="inputTitle">Title Change For: {props.location.aboutProps.title}</label>
                                <input type="text" className="form-control" id="inputTitle" name="title" placeholder="Edit your title..." value={formData["title"]} onChange={handleChange} />
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

export default UpdatePhotos; 