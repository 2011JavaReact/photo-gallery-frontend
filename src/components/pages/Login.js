import React from "react";
import { Redirect } from 'react-router-dom';
import NavBar from '../NavBar';
import Axios from 'axios';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false, error: ''};
     }

   login = (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const url = `http://localhost:8080/photo-gallery/login?username=${username}&password=${password}`;

      Axios.post(url, {},{withCredentials: true})
      .then(res => {
         if (res.status === 200) {
            console.log("response", res);
            this.setState({...this.state, isLoggedIn: true});
         }
      }).catch(e => {
         this.setState({...this.state, error: 'Incorrect Username or Password'});
         console.log("error", e);
      });
   }

    render() {
        if (this.state.isLoggedIn) {
            return <Redirect to={{
                pathname: "/",
                state: { message: "Successfully Logged In!" },
            }} />;
        } else {
            return (
                <div className='m-0 h-100'>
                <NavBar page='signup'/>
                <div id="logincontainer" className='container vh-100 w-100 p-5'>
                   <div id="loginbox" className='row align-items-center justify-content-center h-100'>
                      <div className="border border-dark rounded-lg bg-dark p-md-4 p-sm-1 m-md-auto m-sm-0 mt-5 shadow-lg text-center w-50">
                         <h3 id='loginError' className='text-center error'>{this.state.error}</h3>
                         <hr />
                         <form id="loginform" className='px-5' onSubmit={this.login}>
                            <div className="form-group input-group p-2 mb-2">
                               <input type="text" className="form-control" placeholder="Username" id='username' required />
                            </div>
                            <div className="form-group input-group p-2 mb-2">
                               <input type="password" className="form-control" placeholder="Password" id='password' required />
                            </div>
                            <button type='submit' className='btn btn-login btn-lg'>Login</button>
                         </form>
                      </div>
                   </div>
                </div>
             </div>
            );
        }
    }
}
