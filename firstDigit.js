let n = 100;
var count="";
for(let i=2;i<=n;n%i==0 ? i=2 : i=i+1){
    if(n%i===0){
        n = n/i;
        count = count + " " + i;
    }
}
console.log(count);

