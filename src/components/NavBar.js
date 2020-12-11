import React, { Component } from 'react';
import './styles/NavBar.css';

class NavBar extends Component {

    // constructor(props) {
    //     super(props);
    // }
    

    render() {
        const onPage = this.props.onPage; 
        return (
            <header class="mb-auto">
                <div>
                    <h3 class="float-md-start mb-0">Photo Gallery</h3>
                    <nav class="nav nav-masthead justify-content-center float-md-end">
                        {onPage === 'home' && 
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        }
                        {onPage !== 'home' && 
                            <a class="nav-link" href="/">Home</a>
                        }
                        {onPage === 'photos' &&                         
                            <a class="nav-link active" aria-current="page" href="/photos">Photos</a>
                        }
                        {onPage !== 'photos' &&                         
                            <a class="nav-link" href="/photos">Photos</a>
                        }
                        {onPage === 'signup' &&
                            <a class="nav-link active" aria-current="page" href="/signup">Sign Up</a> 
                        }
                        {onPage !== 'signup' && 
                            <a class="nav-link" href="/signup">Sign Up</a>
                        }
                    </nav>
                </div>
            </header>
        );
    }

}

export default NavBar;

