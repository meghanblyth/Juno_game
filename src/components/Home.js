// import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom' ;

export const Home = () => {
  return ( 
    <Router>
      <h1>Home</h1>
    <div className="Home">
      <Link to={'/Rules'}><button > Rules </button></Link> <Link to={'/Game'}><button > Play! </button></Link>
    </div>
    </Router>
   );
}
 