import './App.css';
import { Card } from './components/Card';

function App() {

    return (
    <div className="App">
      <p>Juno!</p>

      <Card colour={'red'} number={'2'}/>
      <Card colour={'blue'} number={'4'}/>
      <Card colour={'yellow'} number={'6'}/>
      <Card colour={'green'} number={'8'}/>

    </div>
  );

}

export default App;
