
import './App.css';
import Login from './pages/login'
import Category from './pages/category'
import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom';
import Main from './pages/Main'


function App() {
  return (
    <div className="App">
      {/* <Category/> */}
      {/* <Login/> */}
       
      {/* <Main/> */}
      <Router>
    <Switch>
    <Route exact path="/"component={Main}/>
    <Route exact path='/category'component={Category}/>
    <Route exact path="/login" component={Login}/>
    </Switch>
 
  </Router>
     
    </div>
  );
}

export default App;

