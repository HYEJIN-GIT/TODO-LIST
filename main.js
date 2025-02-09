//먼저 입력값이 들어가야한다. 
//+ 버튼 클릭 할일 추가
//delete 버튼 누르면 삭제
//check 버튼 누르면 할일 끝남녀서 밑줄이 간다
//진행중 끝난 탭을 누르면 언더바 이동
//끝남탭은 끝난 아이템만 진행중인 탭은 진행중이 아이템만
//전체탭을 누르면 다시 전체 보여줌
//check 하는 순간 true - 끝난걸로 간주하고 밑줄 , false면 안끝난걸로 간주하고 그대로

// let InputId = document.getElementById("input-id")
// let plusBtn = document.getElementById("plus")
// let allTab = document.querySelectorAll(".task-tap div")
// let taskList = []
// let mode ='all'
// let filterList = []
// let horizontalLine = document.getElementById("under-bar")

// allTab.forEach(menu=> menu.addEventListener("click",(e=>horizontal(e))))
// plusBtn.addEventListener("click",plusClick);




// for(let i=1;i<allTab.length;i++){
//    allTab[i].addEventListener("click",function(event){filter(event)})

// }




// function plusClick(){
//    let taskValue = InputId.value
   
//    let task = {
//       id : randomIDGenerate(),
//       taskValue : InputId.value,
//       isComplete : false
//    }
//    taskList.push(task)
//    render()

// }

// function render(){


// let allList = []

// if(mode === "all"){
//    allList = taskList;
// }else if(mode === "done"){
//    allList = filterList
// }else if (mode === "not-done")
// {
//    allList = filterList
// }


//    let resultHTML = ''
//    for(let i = 0;i<allList.length;i++){
//      if(allList[i].isComplete == true){
//       resultHTML+=`
//       <div class="tasks">
//           <div class = "check-line">${allList[i].taskValue}</div>
//           <div>
//          <button onclick="checkBox('${allList[i].id}')">check</button>
//            <button onclick="deleteBox('${allList[i].id}')">Delete</button>
//            </div>
//       </div>`
//      }else{
//       resultHTML+=`
//       <div class="tasks">
//           <div>${allList[i].taskValue}</div>
//           <div>
//          <button onclick="checkBox('${allList[i].id}')">check</button>
//            <button onclick="deleteBox('${allList[i].id}')">Delete</button>
//            </div>
//       </div>`
//      }
     
     
//    }





//    document.getElementById("task-board").innerHTML = resultHTML;

// }

// function checkBox(id){

//    for(let i=0;i<taskList.length;i++)
//       {
//             if(taskList[i].id == id){
//               taskList[i].isComplete = !taskList[i].isComplete;
//               break;
//             }
//    }
//    render()
// }

// function deleteBox(id){
//    for(let i=0;i<taskList.length;i++){
//       if(taskList[i].id ==id){
//          taskList.splice(i,1)
//          break;

//       }
//    }
// render()
// }


// function filter(event){

//    mode = event.target.id
//    filterList =[]
//    console.log(mode)
//       if(mode == "all"){
//          render()
//       }else if(mode == "done"){
//          for(let i=0;i<taskList.length;i++){
//             if(taskList[i].isComplete == false){
//                 filterList.push(taskList[i]);
//             }
//          }
//          render()


//       }else if(mode == "not-done"){
//          for(let i=0;i<taskList.length;i++){
//             if(taskList[i].isComplete == true){
//                 filterList.push(taskList[i]);
//             }
//       }
//       render()

//    }
// }









// function horizontal(e){
//    horizontalLine.style.left = e.currentTarget.offsetLeft + "px";
//    horizontalLine.style.width = e.currentTarget.offsetWidth + "px";
//    horizontalLine.style.top =
//     e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
// }



// function randomIDGenerate(){
//    return '_' + Math.random().toString(36).substring(2, 9)
// }



let taskInput = document.getElementById("task-input");
let taskPush = document.getElementById("plus-push");
let taskList = []
let mode = 'all'
let filterList = []
let tabs = document.querySelectorAll(".tabs div")
let underBar = document.getElementById("under-bar")


taskPush.addEventListener("click",plusPush);
tabs.forEach(menu=> menu.addEventListener("click",(e=>underBarView(e))))

for(let i = 1;i<tabs.length;i++){

tabs[i].addEventListener("click",function(event){filter(event)})

}



function plusPush(){
   let taskValue = taskInput.value
   let task = {
      id :randomIDGenerate(),
      taskValue: taskInput.value,
      isComplete : false
   }
   taskList.push(task)

   console.log(taskList)
   render()
}


function render(){

   
   let allList = []

   if(mode == "all"){
      allList = taskList
   }else if(mode =="done"){
      allList = filterList
   }else if(mode =="not-done"){
      allList = filterList
   }

   let resultHTML = '';

   for(let i = 0;i<allList.length;i++){
      if(allList[i].isComplete == true){
         resultHTML += ` <div class="tasks">
         <div class = "check-line">${allList[i].taskValue}</div>
         <div>
             <button onclick ="checkBtn('${allList[i].id}')">CHECK</button>
             <button onclick ="deleteBtn('${allList[i].id}')">DELETE</button>
         </div>
     </div>`
      }else{
         resultHTML += ` <div class="tasks">
         <div>${allList[i].taskValue}</div>
         <div>
             <button onclick ="checkBtn('${allList[i].id}')">CHECK</button>
             <button onclick ="deleteBtn('${allList[i].id}')">DELETE</button>
         </div>
     </div>`
      }
     

   }
  
            document.getElementById("task-view").innerHTML = resultHTML;

}

function checkBtn(id){
   for(let i=0;i<taskList.length;i++)
            {
                  if(taskList[i].id == id){
                    taskList[i].isComplete = !taskList[i].isComplete;
                    break;
                  }
         }
         render()

}

function deleteBtn(id){
   for(let i=0;i<taskList.length;i++){
      if(taskList[i].id == id){
         taskList.splice(i,1)
         break;
      }
   }
   render()
}

function filter(event){
   mode = event.target.id
   console.log(mode)
   filterList = []

   if(mode == "all"){
     render()
   }else if(mode == "done"){
      for(let i=0;i<taskList.length;i++){
         if(taskList[i].isComplete == false){
            filterList.push(taskList[i])
         }
        
      }
      render()
   }else if(mode == "not-done"){
      for(let i=0;i<taskList.length;i++){
         if(taskList[i].isComplete == true){
            filterList.push(taskList[i])
         }
        
      }
      render()
   }
}

function underBarView(e){
      underBar.style.left = e.currentTarget.offsetLeft + "px";
   underBar.style.width = e.currentTarget.offsetWidth + "px";
  underBar.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";

}

function randomIDGenerate(){
   return '_' + Math.random().toString(36).substring(2, 9)
}