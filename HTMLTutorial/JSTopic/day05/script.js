 const garndparentEle =document.getElementById('garndparent')
 const parentEle =document.getElementById('parent')
 const childEle =document.getElementById('child')

 garndparentEle.addEventListener('click', function(){
    console.log('garndparent is cliked')
 })
 parentEle.addEventListener('click', function(){
    console.log('parent is cliked')
 })
 childEle.addEventListener('click', function(){
    console.log('child is cliked')
 })