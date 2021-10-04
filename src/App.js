import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/Header/About/About';
import Contact from './components/Header/Contact/Contact';
import Footer from './components/Header/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Header/Home/Home';
import NotFound from './components/Header/NotFound/NotFound';
import Services from './components/Header/Services/Services';

function App() {
  const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, []);
  return (
    <div>
      <Router>
        <Header></Header>
      
      <Switch>
        <Route exact path="/">
          <Home courses={courses}></Home>
        </Route>
        <Route exact path="/home">
          <Home courses={courses}></Home>
        </Route>
        <Route exact path="/services">
          <Services courses={courses}></Services>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
