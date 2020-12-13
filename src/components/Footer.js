import React from 'react';
import './styles/NavBar.css';
import { useSelector } from "react-redux";

const Footer = () => {
    const user = useSelector(store => store);
    return (
        <footer className="mt-auto text-muted-50">
            <p>Project made for  <a href="https://github.com/2011JavaReact/Nick_Barak-Project_0" className="text-muted">Revature Project 1</a>, by <span className="text-muted">Eric Huang and Nick Barak</span>. Hello{(localStorage.getItem('user')) ? ' ' + localStorage.getItem('user') + '.' : '.'}</p>
        </footer>
    );
};

export default Footer;

