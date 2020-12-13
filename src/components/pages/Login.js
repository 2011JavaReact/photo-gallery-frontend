import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import NavBar from '../NavBar';
import { useDispatch } from 'react-redux';
import { login } from "../../redux/actions";
import Axios from 'axios';

const Login = () => {
   const [user, setUser] = useState({
      username: "",
      password: "",
   });

   const dispatch = useDispatch();

   const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(user);
      // Axios.post("http://localhost:8080/photo-gallery/login?username=admin&password=admin", { params: { username: user.username, password: user.password}}, {
      Axios.post("http://localhost:8080/photo-gallery/login?username=admin&password=admin", {}, {
         withCredentials: true,
      }).then((resp) => {
         console.log(resp);
      });
      //here is where we would set redux state
      dispatch(login(user));
   };

   // if (this.props.isLoggedin.loggedin) {
   //    return <Redirect to={{
   //       pathname: "/",
   //       state: { message: "Successfully Logged In!" },
   //    }} />;
   // }
   // else 
   return (
            <div className='m-0 h-100'>
               <NavBar page='signup' />
               <div id="logincontainer" className='container vh-100 w-100 p-5'>
                  <div id="loginbox" className='row align-items-center justify-content-center h-100'>
                     <div className="border border-dark rounded-lg bg-dark p-md-4 p-sm-1 m-md-auto m-sm-0 mt-5 shadow-lg text-center w-50">
                        <h3 id='loginError' className='text-center error'></h3>
                        <hr />
                        <form id="loginform" className='px-5' onSubmit={handleSubmit}>
                           <div className="form-group input-group p-2 mb-2">
                              <input type="text" className="form-control" name="username" placeholder="Username" id='username' value={user.username} onChange={handleChange}/>
                           </div>
                           <div className="form-group input-group p-2 mb-2">
                              <input type="password" className="form-control" name="password" placeholder="Password" id='password' value={user.password} onChange={handleChange}/>
                           </div>
                           <button type='submit' className='btn btn-login btn-lg'>Login</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
   )
}

export default Login;