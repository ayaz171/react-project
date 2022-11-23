import logo from './logo.svg';
import './App.css';
import { Button, Stack } from 'react-bootstrap';
import SingleCard from './components/SingleCard';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <AboutUs />
      <ContactUs/>
    </div>
  );
}

export default App;
