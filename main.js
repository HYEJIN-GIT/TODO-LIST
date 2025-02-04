//먼저 입력값이 들어가야한다. 

let InputId = document.getElementById("input-id")
let plusBtn = document.getElementById("plus")
let taskList = []


plusBtn.addEventListener("click",plusClick);



function plusClick(){
   let taskValue = InputId.value
   console.log(taskValue)
}