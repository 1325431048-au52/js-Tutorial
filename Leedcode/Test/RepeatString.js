s = 'abc'
n=10;
function reapeatString(s,n){
    let count =0;
    for(let i=0; i<s.length; i++){
        if (s[i] ==='a') {
            count++;
        }
    }
        let repetitions = Math.floor(n/s.length)
         count *= repetitions;
         let remainder = n%s.length;
         for(let j=0; j<remainder; j++){
            if(s[i]==='a'){
                count++;
            }
         }
         return count;
    }
    console.log(reapeatString('abc',10))
   