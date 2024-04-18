import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Book from './hw/Book';
import City from './hw/City';
import Person from './hw/Person';
import Home from './hw/Home';
import Navigation from './hw/Navigation';

function App() {
  return (
    <>
      {/* <City/>
      <Book/>
      <Person/> */}

    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Person' element={<Person />}/>
        <Route path='/City' element={<City />}/>
        <Route path='/Book' element={<Book />}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
