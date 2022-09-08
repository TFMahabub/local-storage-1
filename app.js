const getDocumentId = id =>{
  const catchId = document.getElementById(id);
  return catchId;
}
//----------------------------------------------
const todoButton = () =>{
  const TodosItems = JSON.parse(localStorage.getItem('Todos'));
  const inputText = getDocumentId('todo-text');
  const inputValue = inputText.value;
  
  if(inputText.value == ''){
    return alert('input-field is empty');
  }
  else if(!isNaN(inputText.value)){
    return alert('dsfjasdfh')
  }
  else if(!TodosItems){
    const add = [
      {
        title: inputValue,
        completed: false
      },
    ]
    localStorage.setItem('Todos', JSON.stringify(add));
  } else{
    const add = [
      ...TodosItems,
      {
        title: inputValue,
        completed: false
      }
    ]
    localStorage.setItem('Todos', JSON.stringify(add))
  }
  inputText.value = '';
  showLiList();
}
//-----------------------------------------------
const clearList = () =>{
  localStorage.removeItem('Todos');
  showLiList();
}
//-----------------------------------------------
const showLiList = () =>{
  const ulContainer = getDocumentId('ul-container');
  const TodosItems = JSON.parse(localStorage.getItem('Todos'));
  ulContainer.innerHTML =``;
  TodosItems?.forEach((element, index) => {
    const creatUl = document.createElement('div');
    creatUl.innerHTML=`
        <ul class="flex justify-between py-2">
        <li>${element.title}</li>
        <button onclick="clearitem('${index}')" title="Clear All" class="inline-block mr-4">
          <i class="fa-solid fa-square-minus text-[30px] text-red-400"></i>
        </button>
        </ul>
    `
    ulContainer.appendChild(creatUl);
  });
}
//------------------------------------------------------
showLiList();
const clearitem = index =>{
  const existingEntries = JSON.parse(localStorage.getItem("Todos"));
  existingEntries.splice(index, 1);
  localStorage.setItem("Todos", JSON.stringify(existingEntries));
  showLiList();
}

