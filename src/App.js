import "./App.css";
import Navigation from "./components/Navigation";
import Button from "./components/Button";

function App() {
  return (
    <div className='App'>
      <Navigation
        link1='Home'
        link2='Success stories'
        link3='Pricing'
      ></Navigation>
    </div>
  );
}

export default App;
