let data = [60, 23, 10, 34, 56];
let newEl = 90;
let position = 3;

for(let i=data.length-1; i>=0; i--){
    if(i>=position){
        data [i+1] = data[i]
        if(i==position){
            data[i] = newEl;
        }
    }
  }

console.log(data)
