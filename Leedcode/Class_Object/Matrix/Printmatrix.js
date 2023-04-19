mat = [
    [3, 5, 8],
    [1, 6, 3],
    [9, 5, 8],
    ]


    let rows = mat.length;
   let columns = mat[0].length;
for (let i =0; i<rows; i++)
{
    str = " "
    for(let j=0; j<columns; j++){
        str += mat[i][j] +  " ";
    }
console.log(str)
}