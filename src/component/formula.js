export const calculate = (values) => {
    console.log(values)
    let BMR;
    let caloriesPerDay;
    if (values.sex==="female"){
        BMR =  (10 * values.weight) + (6.25 * values.height) - (5 * values.age) - 161;
        caloriesPerDay = BMR * Number(values.activityLevel);
    }
    else{
        BMR =  (10 * values.weight) + (6.25 * values.height) - (5 * values.age) + 5;
        caloriesPerDay = BMR * Number(values.activityLevel);
    }
    const result = {"BMR":BMR, "CaloriesPerDay":Math.round(caloriesPerDay)}
    return result
}