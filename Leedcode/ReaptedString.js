s= 'aba'
n = 10;
function reapeatString(s,n){
    let count =0;
    for(let i=0; i<s.length; i++){
        if(s[i]==='a'){
            count++;
        }
    }
    let repetitions = count * (Math.floor(n/s.length));
    remainder = n%s.length;
    for(let j=0; j=remainder; j++){
    if(s[i]==='a'){
        count++
    }
}
return count;
}
console.log(reapeatString(s,n))

