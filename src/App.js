import {React} from 'react';
import Home from './pages/home';
import About from './pages/about';
import Alphabets from './pages/alphabets';
import Numbers from './pages/numbers';
import Words from './pages/words';
import Practice from './pages/practice';
import Error from './pages/error';
import Tables from './pages/table';
import { BrowserRouter as Router,  
        Switch,
        Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">         
      <Router>        
            <Switch>
                <Route path={"https://akshaykurhekar.github.io/kids-learning/"} component={Home} exact />
                <Route path={"https://akshaykurhekar.github.io/alphabets"} component={Alphabets } exact /> 
                <Route path={"https://akshaykurhekar.github.io/numbers"} component={Numbers} exact />
                <Route path={"https://akshaykurhekar.github.io/table"} component={Tables} exact />
                <Route path={"https://akshaykurhekar.github.io/words"} component={Words} exact />
                <Route path={"https://akshaykurhekar.github.io/practice"} component={Practice} exact /> 
                <Route path={"https://akshaykurhekar.github.io/About"} component={About} exact />                
                <Route component={Error}  />  
            </Switch>
        </Router>    
    </div>
  );
}

export default App;
