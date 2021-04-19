
import './App.css';
import Login from './pages/login'
import Category from './pages/category'
import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom';
import SmartBasket from './pages/SmartBasket'
import Main from './pages/Main'
import ProductDetails from './pages/productDetails'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <Router>
    <Switch>
    <Route exact path="/"component={Main}/>
    <Route exact path="/smartbasket"component={SmartBasket}/>
    <Route exact path='/category'component={Category}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/productDetails" component={ProductDetails}/>
    </Switch>
 
  </Router>
     
    </div>
  );
}

export default App;

