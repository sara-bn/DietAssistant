import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const UserDataForm = (props) => {
    const isMetric = props.isMetric
    const initialValue= { weight:"", height:"" , age:"", sex:"female", activityLevel:"moderately-active"}
    const fromInputSchemaForMetric = Yup.object().shape({
        weight: Yup.number()
            .typeError("Please enter a number")
            .min(isMetric ? 40 : 80)
            .required('Wight is required'),
        height: Yup.number()
            .typeError("Please enter a number")
            .min(isMetric ? 50 : 1)
            .required('Height is required'),
        age: Yup.number()
            .typeError("Please enter a number")
            .min(15)
            .required('Height is required'),
        sex:Yup.string()
            .required('Sex is required')
            .oneOf(["female","male"]),
        activityLevel: Yup.string()
            .required('Activity Level is required')
            .oneOf(["sedentary", "lightly-active", "moderately-active", "very-active", "extremely-active"])
    });

    const CustomNumberInput = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
        <>
            <label htmlFor={props.name}>
            {label}
            <input {...field} {...props} />
            </label>

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
        <Formik
        initialValues={initialValue}
        validationSchema={fromInputSchemaForMetric}
        onSubmit={(values, {setSubmitting, resetForm}) => {         
            setTimeout(()=>{
                alert(JSON.stringify(values));
                resetForm();
                setSubmitting(false);
        },3000)
       
    }}
        >
        {props => (
        <Form>
            <CustomSelect label="Sex" name="sex">
                <option name="female" value="female" id="female">Female</option>
                <option name="male" value="male" id="male">Male</option>
            </CustomSelect>           
            <CustomNumberInput name="age" type="number" label="Age" />      
            <CustomNumberInput name={isMetric?"height":"feet"} type="number" label={isMetric?"CM":"Feet"} />
            <CustomNumberInput style={{display: isMetric && 'none'}} name="inch" type="number" label="Inch" />    
            <CustomNumberInput name="weight" type="number" label="Weight" />
            <CustomSelect label="Activity Level" name="activityLevel">
                <option name="sedentary" value="sedentary" id="sedentary">Sedentary</option>
                <option name="lightly-active" value="lightly-active" id="lightly-active">Lightly Active</option>
                <option name="moderately-active" value="moderately-active" id="moderately-active">Moderately Active</option>
                <option name="very-active" value="very-active" id="very-active">Very Active</option>
                <option name="extremely-active" value="extremely-active" id="extremely-active">Extremely Active</option>
            </CustomSelect>
            <button type="submit" disabled={Formik.errors?true:false} className="submit-button">{props.isSubmitting?"Loading...":"Submit"}</button>
        </Form>
        )}         
        </Formik>      
    )
}
export default UserDataForm;
