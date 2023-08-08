import logo from './logo.svg';
import './App.css';
import Temp from "./components/wheather/temp";

console.log(process.env.REACT_APP_WEATHER_API);

function App() {
  return (
    <>
      <Temp />
    </>
  );
}

export default App;
