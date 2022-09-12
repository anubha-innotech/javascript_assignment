function email_validation(email){
    let regex =  /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if(regex.test(email)){
        console.log("It is a valid email address");
    }
    else{
        console.log("It is an invalid email address");
    }
}
email_validation("xyz@abc.com")