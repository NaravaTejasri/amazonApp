# shoppingCart #
This read me will explain the codebase,which was created to build a fully-functional e-commerce website exactly like amazon by using React.js.

### What is this repository for? ###
  shoppingCart is a web application which will show the list of all products. User can add the products to the cart and can see the details of cartItems list.
  
### Technologies used ###
 * Reactjs
 * Nodejs
 * Mongodb
 * Javascript
 * Html
 * Css

### Functionality ###
 * HTML5 and CSS3: Semantic Elements, CSS Grid, Flexbox
 * React: Components, Props, Events, Hooks, Router, Axios
 * Redux: Store, Reducers, Actions
 * Node & Express: Web API, Body Parser, File Upload, JWT
 * MongoDB: Mongoose
 * Development: ESLint, Babel, Git, Github
 * Deployment: Heroku

### Required Software Tools ###
  * Visual Studio Code.
  * node installed  globally.

### Project Overview ###
shoppingCart Application mainly contains cart, user profile.
In homepage user can see productItems and that all items should be clickable to link to their detail page. The detail page shows all the details of the product. It also has option for user to choose and add the items to the cart. Added items are also can be edited or deleted by the user.
   
#### How do we do it: ####
* install editorconfig globally
  * npm install -g
* How to create project:
  * React create projectname


#### How to run the application ####
##### install dependencies #####
> npm install
##### Setup MongoDB #####
> Local MongoDB
   * Install Mongodb
   * Create .env file in root folder
   * Set MONGODB_URL=mongodb://localhost/shoppingCart
> Atlas Cloud MongoDB
   * Create database at https://cloud.mongodb.com
   * Create .env file in root folder
   * Set MONGODB_URL=mongodb+srv://your-db-connection

#### Run Backend ####
 * npm install
 * cd shoppingCart
 * npm start
 
#### Run Frontend ####
 * open new terminal
 * cd shoppingCart
 * cd frontend
 * npm install
 * npm start

#### Seed Users and Products ####
 * Run this on chrome: http://localhost:5000/api/users/seed
 * It returns admin email and password
 * Run this on chrome: http://localhost:5000/api/products/seed
 * It creates 6 sample products

#### Admin Login ####
 * Run http://localhost:3000/signin
 * Enter admin email and password and click signin




