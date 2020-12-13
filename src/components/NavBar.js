import React, { Component } from 'react';
import './styles/NavBar.css';

class NavBar extends Component {

    // constructor(props) {
    //     super(props);
    // }


    render() {
        const onPage = this.props.onPage;
        return (

            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Photo Gallery</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            {onPage === 'home' &&
                                <li className="nav-item active">
                                    <a className="nav-link" aria-current="page" href="/">Home</a>
                                </li>
                            }
                            {onPage !== 'home' &&
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                            }
                            {onPage === 'photos' &&
                                <li className="nav-item active">
                                    <a className="nav-link" aria-current="page" href="/photos">Photos</a>
                                </li>
                            }
                            {onPage !== 'photos' &&
                                <li className="nav-item">
                                    <a className="nav-link" href="/photos">Photos</a>
                                </li>
                            }
                            {onPage === 'signup' &&
                                <li className="nav-item active">
                                    <a className="nav-link" aria-current="page" href="/signup">Sign Up</a>
                                </li>
                            }
                            {onPage !== 'signup' &&
                                <li className="nav-item">
                                    <a className="nav-link" href="/signup">Sign Up</a>
                                </li>
                            }
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.props.logout}>Logout</a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown01">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export default NavBar;

