const clickBtnElement =window.document.getElementById('click-me-btn')
const bodyElement = document.body;
 
clickBtnElement.addEventListener('click',clickBtnEventListener);
clickBtnElement.addEventListener('moustreen',function (){
    console.log('MouseEntered Event triggered')
})
clickBtnElement.addEventListener('moustleave',function (){
    console.log('MouseLeave triggered')
});
 function clickBtnEventListener(){
    // console.log('Button is clicked !')//
 }

    // 1. create Div Element//
    const divElement = document.createElement('div');
    divElement.innerText ='hello'
    bodyElement.append (divElement)
