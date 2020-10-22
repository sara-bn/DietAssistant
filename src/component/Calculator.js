import React, {useState} from 'react';
import UserDataForm from './UserDataForm';

const Calculator = ()=>{
    const [isMetric, setIsMetric] = useState(true);
    return(
    <div className="calculator">
      <div className="switch">
        <label><input type="checkbox" name="is-metric" checked={isMetric} onChange={() => setIsMetric(true)} /><span>Metric</span></label>
        <label><input type="checkbox" name="is-imperial" checked={!isMetric} onChange={() => setIsMetric(false)}  /><span>Imperial</span></label> 
      </div>
      <UserDataForm isMetric={isMetric}/>
    </div>
    )
}
export default Calculator;
