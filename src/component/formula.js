export const calculate = (values, isMetric) => {

    const height = (isMetric ? values.height : (values.height*12 + (typeof values.inches == 'number' && values.inches)) * 2.54);
    const weight = (isMetric ? values.weight : values.weight*0.45);
    const activityLevel = Number(values.activityLevel);
    
    let BMR;
    let caloriesPerDay;
    
    // Mifflin-St Jeor Equation:
    if (values.sex==="female"){
        BMR =  (10 * weight) + (6.25 * height) - (5 * values.age) - 161;
        caloriesPerDay = BMR * activityLevel;
    }
    else{
        BMR =  (10 * weight) + (6.25 * height) - (5 * values.age) + 5;
        caloriesPerDay = BMR * activityLevel;
    }
    const result = {"BMR":Math.round(BMR), "CaloriesPerDay":Math.round(caloriesPerDay)}
    return result
}