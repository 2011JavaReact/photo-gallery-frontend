import Axios from "axios";
import React from "react";
import './styles/PhotoList.css';
import { Link } from 'react-router-dom';

const PhotoList = (props) => {
    

    return (
        <div className="container">
            {props.photosArray.map((photo) => {
                const URL = `http://localhost:8080/photo-gallery/photos?id=${photo.id}`
                const deletePhoto = () => {
                    Axios.delete(URL, {}, { withCredentials: true}).then((resp) => {
                        console.log('deleted ', resp);
                        alert('Deleted ', photo.title);
                    })
                };
                if (photo.contributor === localStorage.getItem('user'))
                    return (
                        <div className="row">
                            <div className="thumbnail">
                                <img className="center" src={photo.address} style={{ width: '100%' }} />
                                <div className="caption">
                                    <p> <a href={photo.address}>{photo.title}</a> posted by: {photo.contributor}. <button type="button" className="btn btn-danger btn-sm" onClick={deletePhoto}>Delete</button> 
                                    <span className="btn btn-sm"><Link to={{pathname: "/updatephotos", aboutProps:{id: photo.id, title: photo.title}}}>Edit</Link></span></p>
                                </div>
                            </div>
                        </div>
                    );
                else {
                    return (
                        <div className="row">
                            <div className="thumbnail">
                                <img className="center" src={photo.address} style={{ width: '100%' }} />
                                <div className="caption">
                                    <p> <a href={photo.address}>{photo.title}</a> posted by: {photo.contributor}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    );
};

export default PhotoList;