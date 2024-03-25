import './App.css';
import {useContext}from "react";
import Navbar from './Navbar';
import Herosection from './Herosection';
import Footer from './Footer';
import JitsiComponent from './JitsiComponent';
import counterContext from './counterContext';

function App() {
  const {showComponentB} = useContext(counterContext)
  return (
    <div className="App">
    <Navbar />
    {showComponentB ? <JitsiComponent />: <Herosection />}
   
    <Footer />
    </div>
  );
}

export default App;
