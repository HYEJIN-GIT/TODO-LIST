//먼저 입력값이 들어가야한다. 

let InputId = document.getElementById("input-id")
let plusBtn = document.getElementById("plus")
let taskList = []


plusBtn.addEventListener("click",plusClick);



function plusClick(){
   let taskValue = InputId.value
   taskList.push(taskValue)
 
   render()

}

function render(){
   let resultHTML = ''
   for(let i = 0;i<taskList.length;i++){
      resultHTML+=`<div id="task-board">
                <div class="tasks">
                    <div>${taskList[i]}</div>
                    <div><button>Check</button> <button>Delete</button></div>
                </div>
            </div>`
   }





   document.getElementById("task-board").innerHTML = resultHTML;

}