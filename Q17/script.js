console.log("the difference between two dates in days");
function date_diff_indays(start,end){
    const date1 = new Date(start);
    const date2 = new Date(end);
    // console.log(date1);
    let diff = date2.getTime() - date1.getTime();
    // console.log(diff);
    diff_in_days = (diff/(1000*60*60*24));
    return diff_in_days
}
console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014'))
