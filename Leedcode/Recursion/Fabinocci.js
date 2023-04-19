function Fabinocci (n){
    arr = [0,1];
    for (i=2; i<=n ; i++){
        arr [i] = arr[i-1] +arr[i-2];
    }
     return arr [n-1]
}