import logo from './logo.svg';
import './App.css';
import SolarSystemContainer from './containers/SolarSystemContainer';

function App() {

  const [planets, setPlanets] = useState([
    {name: 'mercury'},
    {name: 'venus'},
    {name: 'earth'},
    {name: 'mars'},
    {name: 'jupiter'},
    {name: 'saturn'},
    {name: 'uranus'},
    {name: 'neptune'}
  ])

  return (
    // landing page
    <SolarSystemContainer planets={planets}/>
  );
}

export default App;