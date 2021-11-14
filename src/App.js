import {React} from 'react';
import Home from './pages/home';
import About from './pages/about';
import Alphabets from './pages/alphabets';
import Numbers from './pages/numbers';
import Words from './pages/words';
import Practice from './pages/practice';
import Error from './pages/error';
import Tables from './pages/table';
import { HashRouter as Router,  
        Switch,
        Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Games from './pages/games/games';
import Game1 from './pages/games/game1/game1';
import Game2 from './pages/games/game2/index';

function App() {
  return (
    <div className="App">         
      <Router>        
            <Switch>
                <Route path={"/"} component={Home} exact />
                <Route path={"/alphabets"} component={Alphabets } exact /> 
                <Route path={"/numbers"} component={Numbers} exact />
                <Route path={"/table"} component={Tables} exact />
                <Route path={"/words"} component={Words} exact />
                <Route path={"/practice"} component={Practice} exact /> 
                <Route path={"/About"} component={About} exact />
                <Route path={"/game"} component={Games} exact />
                <Route path={"/game1"} component={Game1} exact />                
                <Route path={"/game2"} component={Game2} exact />                
                <Route component={Error}  />  
            </Switch>
        </Router>    
    </div>
  );
}

export default App;
