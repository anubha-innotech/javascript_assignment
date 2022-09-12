console.log("Calculate Age");
function calculate_age(dob){
    let dobYear = dob.getYear(); 
    let now = new Date(); 
    let currentYear = now.getYear();
    let yearAge = currentYear - dobYear;
    return yearAge
}
console.log(calculate_age(new Date(1982, 11, 4)));
console.log(calculate_age(new Date(1962, 1, 1)));