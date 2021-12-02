import './App.css';
import News from './News';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sportnews from './sportnews';
import './News.css'
import Bike from './Bike';
import Car from './Car'
import Entertenment from './Entertenment'
import Movie from './Movie'
import Mobile from './Mobile'
import Socialmedia from './Socialmedia'

function App() {
  return (

    <div className="App">
      {/* News Show Div */}
      <header className="App-header">
        <Router>
          <Nav />
          <Switch>


            <Router path="/News" component={News} exact />

            <Route path="/sportnews" component={Sportnews} exact />

            

            <Route path="/Bike" component={Bike} exact />
            <Route path="/Car" component={Car} exact />
            <Route path="/Entertenment" component={Entertenment} exact />
            <Route path="/Mobile" component={Mobile} exact />
            <Route path="/Movie" component={Movie} exact />
            <Route path="/Socialmedia" component={Socialmedia} exact />

            
          </Switch>
          
        </Router>

        <News title="NEWS" />

        {/* <Bike /> */}
      </header>
    </div>
  );
}

export default App;
