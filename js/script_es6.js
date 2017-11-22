// Task1
const addInputBtn = document.querySelector('#js-add-input');
const container = document.querySelector('#container');
​
const createInputBox = (parent) => {
 const box = document.createElement('div');
 box.classList.add('input-group');
​
 const input = document.createElement('input');
 input.setAttribute('type', 'text');
 input.classList.add('text_input');
​
 const delBtn = document.createElement('button');
 delBtn.classList.add('input-group__btn');
 delBtn.textContent = '-';
​
 box.append(input, delBtn)
 parent.append(box);
};
​
const handleDelete = (evt) => {
 const target = evt.target;
 const tagName = target.tagName;
 const parentNode = target.parentNode;
​
 if (target !== event.currentTarget && tagName === 'BUTTON') {
  parentNode.remove();
 }
};
​
addInputBtn.addEventListener('click', createInputBox.bind(null, container));
container.addEventListener('click', handleDelete);
​
const collectButton = document.querySelector('#colect');
const textArea = document.querySelector('#textBox');
const inputArr = document.querySelectorAll('input');
​
const collectInputValue = () => {
 let inputArr = document.querySelectorAll('.text_input');
 let radioButton = document.getElementsByName('parity');
 let value = "";
 textArea.innerHTML = "";
​
 const connector = (element, index, length) => {
  if (element.value == "") {
   textArea.innerHTML = "";
   element.classList.add('empty');
   alert(`Пустой ${index+1} инпут`);
   return false;
  } else {
   length - 1 === index ?
    textArea.innerHTML += ` ${element.value}` :
    textArea.innerHTML += ` ${element.value} --\&\&--`;
   element.classList.remove('empty');
   return true;
  }
 }
​
 if (radioButton[0].checked) {
​
  for (let i = 0; i < inputArr.length; i++) {
   if (!connector(inputArr[i], i, inputArr.length)) {
    break;
   }
  }
​
 } else if (radioButton[1].checked) {
  for (let i = 0; i < inputArr.length; i++) {
   if (i % 2 != 0) {
    if (!connector(inputArr[i], i, inputArr.length)) {
     break;
    }
   }
  };
​
 } else {
  for (let i = 0; i < inputArr.length; i++) {
   if (i % 2 == 0) {
    if (!connector(inputArr[i], i, inputArr.length)) {
     break;
    }
   }
  };
 }
};
​
collectButton.addEventListener('click', collectInputValue);
​
// Task2
const currentBlock = document.querySelector('.task2');
const addInput = currentBlock.querySelector('.addinput');
const newInputButton = document.querySelector('#js-arrPushButton');
currentBlock.addEventListener('click', (e) => {
 const target = e.target;
 if (target.tagName == 'LI') target.classList.toggle('selected');
});
​
newInputButton.addEventListener('click', () => {
 const ul = currentBlock.querySelector('UL'),
  newLi = document.createElement('LI');
 if (addInput.value != "") {
  newLi.innerHTML = addInput.value;
  ul.appendChild(newLi);
 } else {
  alert('заполните инпут');
 }
});