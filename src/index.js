import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'



 
/* add the navbar component */

// refactored into separate components
// const Home = () => {
//   return (
//     <div>
//       <h1>Jingle Bells!</h1>
//     </div>
//   );
// };

// const About = () => {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   );
// };

// const Login = () => {
//   return (
//     <div>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//           <label htmlFor="username">Username</label>
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//           <label htmlFor="password">Password</label>
//         </div>
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// };

// Changed to have router coordinate what is displayed
// ReactDOM.render((
//   <Router>
//   <React.Fragment>
//     <Route path="/" render={Home} />
//     <Route exact path="/about" render={About} />
//      <Route exact path="/login" render={Login} />
//      </React.Fragment>
//   </Router>),
//   document.getElementById('root')
// );


// alternative for simple page rendering
ReactDOM.render((
  <Router>
    <React.Fragment>
    <Navbar />
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);