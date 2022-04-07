# CrowdStore
This is a complete web application written in JavaScript that uses React, Express, Node and PostgreSQL with their respective REST API that clients can connect to. It consists of a platform where clients can add, view, update and delete products. The app has minor styling details because it focuses on functionality, but it does have Bootstrap implemented.

# The application
It is running within the Heroku cloud and can be visited via:

https://crowdstoreapp.herokuapp.com/

A client can see all the products listed on the main page. They can also upload, view, edit and delete products. There are forms and buttons to achieve it. There is no authentication process implemented yet.

# The REST API
The API is deployed in the Heroku cloud and has its own database incorporated with PostgreSQL. The available routes are the following:

- Home: where the list of all products is rendered. You can see a nav and footer as well as a login/logout/profile button (which have their respective components and are accessible via /profile, /register and /login but not yet implemented).

- Products view: a detailed view of each product, accessible by clicking on a product in the list.

- Add/Update forms: Where you can upload or edit a new product.

- Not Found: It is a component to handle errors and pages not found

# How to run the app
Git clone the repository and then on both server and frontend folders run 'npm install'

In the server folder run "npm run server" and then in the frontend folder run "npm start"

# Specifications:

* React version: 17.0.2

* Express version: 4.17.3

* PostgreSQL version: 14.2

* Node version: 16.14.0

# Principal dependencies:

* axios
* react-dom
* react-router / react-router-dom
* morgan

CrowdStore Inc © All rights reserved - Created by @effeleiva 
