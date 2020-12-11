import React, { Component } from 'react';
import './../styles/ViewPhotos.css';
import NavBar from '../NavBar';
import Footer from '../Footer'

class ViewPhotos extends Component {
    render() {
        return (
            <body className="text-center text-white bg-dark">
                <NavBar onPage="photos" />
                <div className="container">

                    <div className="jumbotron">
                        <h1><button href="/addphotos" className="btn btn-primary btn-lg">Post a Photo</button></h1>

                        <p>Share your favorite photos</p>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="thumbnail">
                                <a href="https://www.w3schools.com/w3images/lights.jpg">
                                    <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Lights" style={{width: '100%'}} />
                                    <div className="caption">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumbnail">
                                <a href="https://www.w3schools.com/w3images/nature.jpg">
                                    <img src="https://www.w3schools.com/w3images/nature.jpg" alt="Nature" style={{width: '100%'}} />
                                    <div className="caption">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumbnail">
                                <a href="https://www.w3schools.com/w3images/fjords.jpg">
                                    <img src="https://www.w3schools.com/w3images/fjords.jpg" alt="Fjords" style={{width: '100%'}} />
                                    <div className="caption">
                                        <p>Lorem ipsum...</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer/>
            </body>

        );
    }

}

export default ViewPhotos;