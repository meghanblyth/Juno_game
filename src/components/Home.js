import { BrowserRouter as Router, Link } from 'react-router-dom' ;

export const Home = () => {
  return ( 
    <div className="Home">
      <h1>Home</h1>
      <Link to={'/Rules'}><button > Rules </button></Link> <Link to={'/Game'}><button > Play! </button></Link>
    </div>
   );
}
 