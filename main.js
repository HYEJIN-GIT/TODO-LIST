//먼저 입력값이 들어가야한다. 
//+ 버튼 클릭 할일 추가
//delete 버튼 누르면 삭제
//check 버튼 누르면 할일 끝남녀서 밑줄이 간다
//진행중 끝난 탭을 누르면 언더바 이동
//끝남탭은 끝난 아이템만 진행중인 탭은 진행중이 아이템만
//전체탭을 누르면 다시 전체 보여줌
//check 하는 순간 true - 끝난걸로 간주하고 밑줄 , false면 안끝난걸로 간주하고 그대로


let InputId = document.getElementById("input-id")
let plusBtn = document.getElementById("plus")
let taskList = []


plusBtn.addEventListener("click",plusClick);



function plusClick(){
   let taskValue = InputId.value
   
   let task = {
      id : randomIDGenerate(),
      taskValue : InputId.value,
      isComplete : false
   }
   taskList.push(task)
   render()

}

function render(){
   let resultHTML = ''
   for(let i = 0;i<taskList.length;i++){
     if(taskList[i].isComplete == true){
      resultHTML+=`
      <div class="tasks">
          <div class = "check-line">${taskList[i].taskValue}</div>
          <div>
         <button onclick="checkBox('${taskList[i].id}')">check</button>
           <button onclick="deleteBox('${taskList[i].id}')">Delete</button>
           </div>
      </div>`
     }else{
      resultHTML+=`
      <div class="tasks">
          <div>${taskList[i].taskValue}</div>
          <div>
         <button onclick="checkBox('${taskList[i].id}')">check</button>
           <button onclick="deleteBox('${taskList[i].id}')">Delete</button>
           </div>
      </div>`
     }
     
     
   }





   document.getElementById("task-board").innerHTML = resultHTML;

}

function checkBox(id){

   for(let i=0;i<taskList.length;i++)
      {
            if(taskList[i].id == id){
              taskList[i].isComplete = !taskList[i].isComplete;
              break;
            }
   }
   render()
}

function deleteBox(id){
   for(let i=0;i<taskList.length;i++){
      if(taskList[i].id ==id){
         taskList.splice(i,1)
         break;

      }
   }
render()
}



function randomIDGenerate(){
   return '_' + Math.random().toString(36).substring(2, 9)
}