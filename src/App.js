import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/home'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
   
}

export default App;
