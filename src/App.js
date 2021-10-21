import { Route, Switch } from 'react-router';
import './App.css';
import Menu from './components/menu';
import Home from './components/home';
import Products from './components/products/products';
import ProductUpload from './components/products/product_upload';
import Users from './components/users/userslist';
import Join from './components/users/join';
import Login from './components/users/login';

function App() {
  return (
    <div className="App">
      <div className="bg">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="울퉁불퉁1">
          <path fill="#FFF" d="M66.1,-52.9C81.1,-33.8,85.7,-6.6,79.2,16.5C72.6,39.6,55,58.7,33,69.9C10.9,81,-15.7,84.3,-35.5,74.5C-55.4,64.7,-68.6,41.7,-74.3,16.9C-79.9,-7.8,-78.1,-34.3,-64.5,-53.1C-50.8,-71.8,-25.4,-82.8,0.1,-82.9C25.5,-82.9,51,-72,66.1,-52.9Z" transform="translate(100 100)" />
        </svg>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="울퉁불퉁2">
          <path fill="#FFF" d="M66.1,-52.9C81.1,-33.8,85.7,-6.6,79.2,16.5C72.6,39.6,55,58.7,33,69.9C10.9,81,-15.7,84.3,-35.5,74.5C-55.4,64.7,-68.6,41.7,-74.3,16.9C-79.9,-7.8,-78.1,-34.3,-64.5,-53.1C-50.8,-71.8,-25.4,-82.8,0.1,-82.9C25.5,-82.9,51,-72,66.1,-52.9Z" transform="translate(100 100)" />
        </svg>
        <div className="container">        
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/upload" component={ProductUpload} />
            <Route path="/users" component={Users} />
            <Route path="/join" component={Join} />
            <Route path="/login" component={Login} />
            
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
