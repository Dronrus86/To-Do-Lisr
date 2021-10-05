
const btn = document.querySelector('#add');
const input = document.querySelector('#task');
//const task = document.querySelector('#task_description');
//const select = document.querySelector('#selectID');
const list = document.querySelector('#list');
const toDo = document.querySelector('.to_do_list');


btn.onclick = function(event){
    event.preventDefault();
    task();
    task_description();
    selekt();
  

}
  function task(){

    let input = document.getElementById('task_description').value; 
    let str = document.getElementById('list');
    if(input){ 
    add(str, input); 
    }else{
        return false; 
    }
}
function add(str, input){
    let li = document.createElement('li');
    li.innerText = input;
    str.append(li);
  }
  
  function task_description(){
    let input = document.getElementById('task').value; 
    let st = document.getElementById('list1'); 
    if(input){ 
    add(st, input); 
    }else{
        return false; 
    }
}
function add(st, input){
    let li = document.createElement('li');
    li.innerText = input;
    st.append(li);
}

function selekt(){
    let select = document.getElementById('selectID').value; 
    let addSelect = document.getElementById('list2');
    let li = document.createElement('li');
    li.innerHTML = select;
    addSelect.append(li);
}
