# PHOTO GALLERY FRONT END

## Project Description
This is the front-end for the Photo Gallery API built by Nick Barak. It's a simple Web Application where you can sign in as a user to view other user's photos, and post your own photos with a specific title. Photos will have a title, as well as info about the user who submitted them. Users also have an option to delete their own photos or edit their own titles. 

## Technologies Used
* React
* JavaScript
* AWS RDS
* HTML/CSS
* Bootstrap 4
* Axios 
* React-Router-Dom 

## Features 
* Sign-in capabilities 
* Users can post photos given an image URL
* Users can view other users' posted photos
* Users can edit the titles of their own photos
* Users can delete their own photos

## To-do List
* Improvements to UI 
* Ability to submit image files rather than just URL 
* Ability to view what time a photo was posted 
* Sign-Up Page 

## Getting Started

To begin, go to the main branch, click the green "Code" button and copy the HTTPS link. Use git clone followed by the copied HTTPS link to clone the repo.

This app is currently not deployed. In order to run this, you must clone Nick Barak's Photo Gallery back end, deploy it onto 
localhost:8080 through Tomcat, and run this through npm start (after npm i to install all the dependencies).


A sign up page is not currently available; a test user you can
use to check out the website is username: User 2 with password: pass. 

## Usage
The home page simply has basic information on the website, and 
you will notice a Navbar. Clicking on the Photos portion
of the Navbar brings you to a page where you can view all the 
photos posted by other Users, with its corresponding title and
username. 

Clicking on Post photos will bring you to the Login page if
you aren't already logged in. Once logged in, you can post
photos with a title and URL. 

Going back to the Photos page when logged in allows you to edit
or delete your corresponding photos. 
