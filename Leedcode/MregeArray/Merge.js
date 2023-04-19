A= [2,7,9,13,1,8,4]
B =[3,10,5,4,8,15,18,9,11]
function merge(A, B){
    let C = [];
    let p =0;
    let q =0;
    while(p < A.length && q < B.length){
        if(A[p] <= B[q]){
            C.push(A[p]);
            p++;
        }
        else{
            C.push(B[q])
            q++
        }
        while(p <A.length){
            C.push(A[p])
            p++
        }
        while(q <B.length){
            C.push(B[q])
            q++
        }
        return C;
    }
  
    
}
console.log(merge (A, B))
