import { Container } from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'

import Header from "./components/header/Header";
import MainNav from './components/MainNav'

import Trading from './pages/Trading/Trading'
import Movies from './pages/Movies/Movies'
import Series from './pages/Series/Series'
import Search from './pages/Search/Search'

function App() {
  return (
    <Router>
      <Header data="Entertainment Hub" />
      <div className="app">
          <Container>
              <Switch>
                <Route path="/" component={Trading} exact />
                <Route path="/movies" component={Movies} />
                <Route path="/series" component={Series} />
                <Route path="/search" component={Search} />
              </Switch>
          </Container>
      </div>
        <MainNav />
    </Router>
    
  );
}

export default App;
