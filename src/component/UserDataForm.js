import React , {useState} from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import {calculate} from './formula';

const UserDataForm = (props) => {
    const [result, setResult] = useState("");
    const isMetric = props.isMetric
    const initialValue= { weight:"", height:"" , age:"", sex:"female", activityLevel:"1.2"}
    const fromInputSchemaForMetric = Yup.object().shape({
        weight: Yup.number()
            .typeError("Please enter a number")
            .min(isMetric ? 40 : 80)
            .required('Weight is required'),
        height: Yup.number()
            .typeError("Please enter a number")
            .min(isMetric ? 50 : 1)
            .required('Height is required'),
        inch: Yup.number(),
        age: Yup.number()
            .typeError("Please enter a number")
            .min(15)
            .required('Age is required'),
        sex:Yup.string()
            .required('Sex is required')
            .oneOf(["female","male"]),
        activityLevel: Yup.string()
            .required('Activity Level is required')
    });

    const CustomNumberInput = ({ ...props }) => {
        const [field, meta] = useField(props);
        return (
        <>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
            ) : null}
        </>
        );
    };

    const CustomSelect = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
        <>
            <label>
            {label}
            <select {...field} {...props} />
            </label>
            {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
            ) : null}
        </>
        );
    };

    return(
        <div>
        <Formik
        initialValues={initialValue}
        validationSchema={fromInputSchemaForMetric}
        onSubmit={(values, {setSubmitting, resetForm}) => {         
            setTimeout(()=>{
                const res = calculate(values);
                setResult(res);
                setSubmitting(false);
        },1000)
       
    }}
        >
        {props => (
        <Form> 
            <CustomSelect label="Sex" name="sex">
                <option name="female" value="female" id="female">Female</option>
                <option name="male" value="male" id="male">Male</option>
            </CustomSelect>   
            <CustomSelect label="Activity Level" name="activityLevel">
                <option name="sedentary" value="1.2" id="sedentary">Sedentary</option>
                <option name="lightly-active" value="1.375" id="lightly-active">Lightly Active</option>
                <option name="moderately-active" value="1.5" id="moderaely-active">Moderately Active</option>
                <option name="very-active" value="1.725" id="very-active">Very Active</option>
                <option name="extremely-active" value="1.9" id="extremely-active">Extremely Active</option>
            </CustomSelect>       
            <CustomNumberInput name="age" type="number" placeholder="Age" />      
            <CustomNumberInput name="height" type="number" placeholder={isMetric?"Height (Cm)":"Height (Feet)"} />
            <CustomNumberInput style={{display: isMetric && 'none'}} name="inch" type="number" placeholder="Height (Inch)" />    
            <CustomNumberInput name="weight" type="number" placeholder={isMetric?"Weight (Kg)":"Weight (lb)"}/>
            <button type="submit" className="submit-button">{props.isSubmitting?"Loading...":"Submit"}</button>
        </Form>
        )}         
        </Formik>
        {result && <div className="result">
            <p>Your BRM is <span>{result.BMR}</span> , and <span>{result.CaloriesPerDay}</span> is the maintenance calories per day</p>
            </div>
            }
          
        </div>    
    )
}
export default UserDataForm;
