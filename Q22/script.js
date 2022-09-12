console.log(" JavaScript function to get a copy of the object where the keys have become the values and the values the keys");
const user = {
	Name: 'mukesh',
	Color: 'red'
}
console.log(user);

let newUser = {};
Object.entries(user).forEach(element => {
    let key = element[0];
    let value = element[1];
    newUser[value] = key;
})
console.log(newUser);
