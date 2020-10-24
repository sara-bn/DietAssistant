import React, {useState} from 'react';
import UserDataForm from './UserDataForm';
import logo from '../assets/images/logo_transparent.png';

const Calculator = ()=>{
    const [isMetric, setIsMetric] = useState(true);
    return(
      <div className="main">
        <div className="logo-container">
          <img src={logo} alt='logo' ></img> 
        </div>
        <div className="calculator">
          <div className="switch">
            <label><input type="checkbox" name="is-metric" checked={isMetric} onChange={() => setIsMetric(true)} /><span>Metric</span></label>
            <label><input type="checkbox" name="is-imperial" checked={!isMetric} onChange={() => setIsMetric(false)}  /><span>Imperial</span></label> 
          </div>
          <UserDataForm isMetric={isMetric}/>
        </div>
      </div>
    )
}
export default Calculator;
