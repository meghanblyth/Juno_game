import { Link } from 'react-router-dom'

export const Home = () => {
  return ( 
    <div className="Home">
      <Link to={'/Rules'}><button > Rules </button></Link> <Link to={'/Game'}><button > Play! </button></Link>
    </div>
   );
}
 