 const addBtnElement = document.querySelector("#add-btn")
 const taskInputEle = document.querySelector("#task-input")

 

 addBtnElement.addEventListener('click', (event)=> {
    const newTask = taskInputEle.value
    console.log(newTask)
 })
