let alltasks = [];
let completedTasks=[];
let updateIndex;
const table = document.getElementById("mainTable");
const completeTable = document.getElementById("completeTable");
const input = document.getElementsByTagName("input");
const submitButton=document.getElementById("submitButton");
const updateButton=document.getElementById("updateButton");
const allHeading=document.getElementById("allTasks");
const completeHeading=document.getElementById("completedTasks");



function addTask() {
  //get all input fields
  if(input[0].value=="" || input[1].value=="" || input[2].value=="")
  {
    window.alert("Please Enter All Values Properly");
  }
  else{
    let obj = {};
  for (let i = 0; i < input.length; i++) {
    obj[input[i].name] = input[i].value;
    input[i].value="";
  }
  alltasks.push(obj);
  displayTable(table);
  }
}

function displayTable() {
  if (alltasks.length > 0) {
    let s = `
     <tr>
            <th rowspan="2">Task Number</th>
            <th rowspan="2">User ID</th>
            <th rowspan="2">Task Name</th>
            <th rowspan="2">Task Date</th>
             <th colspan="3"> Modifications</th>
        </tr>
        <tr>
            <th>Edit</th>
            <th>Delete</th>
            <th>Complete</th>
            
        </tr>
    `;
    for (let i = 0; i < alltasks.length; i++) {
      s += `  <tr>
      <td>${i + 1}</td>
      <td>${alltasks[i].userid}</td>
      <td>${alltasks[i].taskName}</td>
      <td>${alltasks[i].taskTime}</td>
      <td><button  onclick="editTask('${i}')">Edit</button></td>
      <td><button  onclick="removeTask('${i}')">Delete</button></td>
      <td><button  onclick="completeTask('${i}')">Complete</button></td>
  </tr>`;
    }
      table.innerHTML = s;
      allHeading.style.display="block";
     /*  table.border = "1"; */
  }
  else{
    table.innerHTML ="";
    allHeading.style.display="none";
  }

}
function displayCompletedTable() {
  if (completedTasks.length > 0) {
    let s = `
     <tr>
            <th>Task Number</th>
            <th>User ID</th>
            <th>Task Name</th>
            <th>Task Date</th>
    </tr>
    `;
    for (let i = 0; i < completedTasks.length; i++) {
      s += `  <tr>
      <td>${i + 1}</td>
      <td>${completedTasks[i].userid}</td>
      <td>${completedTasks[i].taskName}</td>
      <td>${completedTasks[i].taskTime}</td>
    </tr>`;
    }
    completeTable.innerHTML = s;
    completeHeading.style.display="block";
    /* completeTable.border = "1"; */
  }
  else{
    completeTable.innerHTML ="";
    completeHeading.style.display="none";

  }
}
function editTask(id) {
  input[0].value=alltasks[id].userid;
  input[1].value=alltasks[id].taskName;
  input[2].value=alltasks[id].taskTime;
  submitButton.style.display="none";
  updateButton.style.display="block";
  updateIndex=id;
  

}
function updateTask(){

  if(input[0].value=="" || input[1].value=="" || input[2].value=="")
    {
      window.alert("Please Enter All Values Properly");
    }
  else{
    obj={};
    submitButton.style.display="block";
    updateButton.style.display="none";
    for(let i=0;i<input.length;i++){
      obj[input[i].name]=input[i].value;
      input[i].value="";
    }
    alltasks[updateIndex]=obj;
    displayTable();

  }
}
function removeTask(id){
  if(alltasks.length>0){
    alltasks.splice(id,1);
    displayTable();
  }
}
function completeTask(id){
         obj=alltasks[id];
         removeTask(id);
         completedTasks.push(obj);
         displayCompletedTable();

}


