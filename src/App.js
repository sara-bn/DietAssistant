import React  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Calculator from './component/Calculator';
import logo from './assets/images/logo_transparent.png';


function App() { 
  return (
    <div>
      <img className='logo' src={logo} alt='logo' ></img>   
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/calculator" component={Calculator}></Route>
			</Switch>
		</BrowserRouter>
    </div>
  );
}

export default App;
