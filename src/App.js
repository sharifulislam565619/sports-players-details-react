import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PlayerDetails from './components/PlayerDetails/PlayerDetails';
import Players from './components/Players/Players';





function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/players">
          <Players />
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/details/:id">
          <PlayerDetails></PlayerDetails>
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  )

}

export default App;
