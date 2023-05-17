import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Navigation
        link1='Home'
        link2='Success stories'
        link3='Pricing'
      ></Navigation>
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
