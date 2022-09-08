const getDocumentId = id =>{
  const catchId = document.getElementById(id);
  return catchId;
}

const todoButton = () =>{
  const TodosItems = JSON.parse(localStorage.getItem('Todos'));
  const inputText = getDocumentId('todo-text');
  const inputValue = inputText.value;
  inputText.value = '';

  if(!TodosItems){
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
  showLiList()
}






const showLiList = () =>{
  const ulContainer = getDocumentId('ul-container');
  const TodosItems = JSON.parse(localStorage.getItem('Todos'));
  ulContainer.innerHTML =``;
  TodosItems.forEach(element => {
    const creatUl = document.createElement('ul');
    creatUl.innerHTML=`
        <li>${element.title}</li>
        <button onclick="clearitem()" title="Clear All" class="mr-4">
          <i class="fa-solid fa-square-minus text-[30px] text-red-400"></i>
        </button>
    `
    console.log(element)
    ulContainer.appendChild(creatUl);
  });
}


showLiList()

const clearitem = () =>{
  console.log('clicked')
}



const clearList = () =>{
  localStorage.removeItem('Todos');
}