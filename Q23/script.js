let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:
"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
programming.languages.push("Go");
programming.difficulty = 7;
delete programming.jokes;
programming.isFun = true;

for(let i = 0;i<programming.languages.length;i++){
    console.log(programming.languages[i]);
}
for(let key in programming){
    console.log(key);
}
for(let key in programming){
    console.log(programming[key]);
}
