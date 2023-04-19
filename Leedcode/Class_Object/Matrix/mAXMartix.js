 mat = [
    [2,5,9],
    [34,56,4],
    [12,9,0]
 ]

 // find the max value in the matrix

 function MaxMatrix(mat){
    maxvalue = mat[0][0];
    for(let i =0; i<mat.length; i++){
        for(let j=0; j<mat[0].length; j++){
            if(mat[i][j]>maxvalue){
                maxvalue =mat[i][j]
            }
        }
    }
    return maxvalue;
 }
 console.log(MaxMatrix(mat))
