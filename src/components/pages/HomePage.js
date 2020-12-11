import React, { Component } from 'react';
import './../styles/HomePage.css';
import NavBar from '../NavBar';
import Footer from '../Footer'

class HomePage extends Component {

    render() {
        return (
            <body class="d-flex h-100 text-center text-white bg-dark">
                <div class="cover-container d-flex w-100 h-100 p-5 mx-auto flex-column" >
                    <NavBar onPage="home"/>
                    <main class="px-3">
                        <h1>What is this?</h1>
                        <p class="lead">Photo Gallery is a simple application that allows you to store your favorite photos. Make an account and add photos by clicking the button below. View and edit personal settings on the profile page. You can also view other users and the photos they have added. </p>
                        <p class="lead">
                            <a href="/addphotos" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Post Photos</a>
                        </p>
                    </main>

                    <Footer/>
                </div>
            </body>
        );
    }

}

export default HomePage;