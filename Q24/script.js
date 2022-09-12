let vegetables = ["Garlic", "Carrot", "Broccoli", "Pumpkin"];
console.log(vegetables);
for(let i=1; i<vegetables.length; i++){
    for(let x=0;x<i;x++){
        if(vegetables[i]<vegetables[x]){
            let temp = vegetables[i];
            vegetables[i] = vegetables[x];
            vegetables[x] = temp;
        }
    }
}
console.log(vegetables);