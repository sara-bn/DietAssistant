import React  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Calculator from './component/Calculator';

function App() { 
  return (
    <div>  
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
