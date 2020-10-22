import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const UserDataForm = (props) => {
    const isMetric = props.isMetric
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
    });

    return(
    <div> 
        <Formik
        initialValues={{ weight:"", height:"" , age:"" }}
        validationSchema={fromInputSchemaForMetric}
        onSubmit={values => {
            alert(JSON.stringify(values));
        }}
        >
            {({ errors, touched }) => (
            <Form>
            <Field name="weight" />
            {errors.weight && touched.weight ? (
                <div>{errors.weight}</div>
            ) : null}
            <Field name="height" />
            {errors.height && touched.height ? (
                <div>{errors.height}</div>
            ) : null}
            <Field name="age" />
            {errors.age && touched.age ? (
                <div>{errors.age}</div>
            ) : null}
            <button type="submit">Submit</button>
            </Form>   
            )}          
        </Formik>      
    </div>
    )
}
export default UserDataForm;
