const getId = id =>{
  const element = document.getElementById(id);
  return element;
}
//-------------------------------------------------
const todoButton = () =>{
  const inputText = getId('todo-text');
  const localStorageItem = JSON.parse(localStorage.getItem('Mahabub'))
  const inputValue = inputText.value;
  if(inputText.value === ''){
    return alert('input-field is empty')
  }
  else if(!isNaN(inputText.value)){
    return alert('Numbers is not allowed')
  }
  else if(localStorageItem === null){
    const add = [
      {
        title: inputValue,
        completed: false
      },
    ]
    localStorage.setItem('Mahabub', JSON.stringify(add));
  }
  else{
    const add = [
      ...localStorageItem,
      {
        title: inputValue,
        completed: false
      },
    ]
    localStorage.setItem('Mahabub', JSON.stringify(add));
  }
  inputText.value = '';
  showLiList()
}
//--------------------------------------------------------
const clearList = () =>{
  localStorage.clear('mahabub');
  showLiList()
}
//-----------------------------------------------------
const showLiList = () =>{
  const ulContainer = getId('ul-container');
  const localStorageItem = JSON.parse(localStorage.getItem('Mahabub'))
  ulContainer.innerHTML = ``;
  localStorageItem?.forEach((element,index) => {
    const createElement = document.createElement('div');
    createElement.innerHTML=`
      <ul class="flex justify-between py-2">
      <li>${element.title}</li>
      <button onclick="removeItem(${index})" title="Clear All" class="mr-4">
          <i class="fa-solid fa-square-minus text-[30px] text-red-400"></i>
        </button>
      </ul>
    `;
    ulContainer.appendChild(createElement);
  });
}
//-----------------------------------------------------------------------
showLiList()
const removeItem = index =>{
  const localStorageItem = JSON.parse(localStorage.getItem('Mahabub'));
  localStorageItem.splice(index, 1);
  localStorage.setItem('Mahabub', JSON.stringify(localStorageItem));
  console.log(localStorageItem);
  showLiList()
}