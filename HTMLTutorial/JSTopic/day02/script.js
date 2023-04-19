console.log("script type is linked")

window.document.body.style.backgroundColor="green"
 const clickBtnElement = window.document.getElementById('click-me-btn')
   const bodyElement = document.body
//  console.log(clickBtnElement)

 clickBtnElement.addEventListener('click',clickBtnElementListener) 
 function clickBtnElementListener(){
    console.log('button is clicked !')

      
    //1. create new Element
    const divElement = document.createElement('div')
    divElement.innerText ='hello'
    bodyElement.append(divElement);
 }