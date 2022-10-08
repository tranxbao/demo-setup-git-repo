import logo from './logo.svg';
import './App.scss'
import Nav from './components/Navigation/Nav'
import Home from './components/Home'
import AddNewProduct from './components/AddNewProduct';
import Product from './components/Products/Product';
import 'react-image-lightbox/style.css';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom"
import Weather from './components/Weather/Weather';


const App = () => {
  return (
  <Router>
    <Nav/>
    <Switch>
         <Route exact path="/" >
          <div className="App">
      <header className="App-header content-left">
         <div style={{textAlign:"center"}}> <img src={logo} className="App-logo" alt="logo" /></div>
         <Home/>
      </header>
      <div className='content-right'>
          <AddNewProduct/>
          <hr />
          <Product/>
      </div>
    </div>
          </Route>
          <Route path="/product">
          <Product/>
          </Route>
          <Route path="/weather">
           <Weather/>
          </Route>
          <Route path="/about">
            <div>About</div>
          </Route>
          <Route path="*">
             <div>404 Not Found</div>
          </Route>
    </Switch>
   
  </Router>
  );
}

export default App;
