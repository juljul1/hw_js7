//1
//1.0 add input max 10
i = 0;
addinput.onclick = function(){
  if (i < 10) {
    var newInput = document.createElement('input');
    var removeButton = document.getElementById('removeinput');
    newInput.className = 'usertext';
    newInput.name = i;
    removeButton.className = 'visible';
    inputscollect.appendChild(newInput);
    i++;
  }
}

//#1.1 + #2 + #3 collect diff inputs into p
docollect.onclick = function () {
      // radios
      checkOdd = document.getElementById('odd').checked,
      checkEven = document.getElementById('even').checked,
      checkAll = document.getElementById('all').checked
    collectedinp.innerHTML = '' //delete from <p>
      //delete notifications if exsist
      if (inputscollect.contains(inputscollect.querySelector('.fill-form'))) {
        let fillDiv = document.querySelectorAll('.fill-form');
            fillDiv.forEach(function (elem){
              inputscollect.querySelector('.fill-form').remove() //del TextNode
      })}

    let input = document.querySelectorAll('.usertext');
      input.forEach(function (elem, index) {
        elem.classList.remove('bgred'); //del red if exsist
        let newText = document.createElement('p'); 
        newText.className = 'fill-form';
        newText.innerHTML = '!Fill the form';
        
        if (elem.value == '') { //проверка на пустое значение
            inputscollect.insertBefore(newText, elem);  //create notifications of empty
            elem.classList.add('bgred');
        }
        else{
      
            if (checkAll == true ) { //takes all inputs
              collectedinp.innerHTML += elem.value;
          } else if (checkOdd == true) { //takes odd inputs
            if (index % 2 == 0) {
              collectedinp.innerHTML += elem.value;
            }
          } else if (checkEven == true) {//takes even inputs});
            if (index % 2 != 0) {
              collectedinp.innerHTML += elem.value;
            }
          }
          elem.value = '';
        }})
  }
    
//1.2 remove last input
removeinput.onclick = function(){
  if (i>=1) {
    let lastInputs = document.querySelector('.usertext:last-child');
    let allInputs = document.querySelectorAll('.usertext');
        inputscollect.removeChild(lastInputs); //dell last inp
       
       //del red if exsist
        allInputs.forEach(function(elem){
          elem.classList.remove('bgred'); 
        })
        //dell all notifications  
        if (inputscollect.contains(inputscollect.querySelector('.fill-form'))) {
          let fillDiv = document.querySelectorAll('.fill-form');
              fillDiv.forEach(function (elem){
              inputscollect.querySelector('.fill-form').remove() //del TextNode
        })}
  i--;
  } else{
    removeinput.disabled = 'true'; //dissable bott -
  }
}

//4
//show window
showbutton.onclick = function showCover() {
    let coverDiv = document.getElementById('cover-div'),
        bgdiv = document.getElementById('bgdiv');
        coverDiv.classList.remove('hidden');
        bgdiv.classList.remove('hidden');
      // if opt 1
      opt1.onclick = function madeOption() {
        coverDiv.classList.add('hidden');
        bgdiv.classList.add('hidden');
        optionRes.innerHTML = 'Теперь ты вышел из матрицы!';
      }
      // if opt 2
      opt2.onclick = function madeOption() {
        coverDiv.classList.add('hidden');
        bgdiv.classList.add('hidden');
        optionRes.innerHTML = 'Ну и ладно';
      }
    }
//5
//reed elems
  
function addRed(){
let allp = elemsdiv.querySelectorAll(':scope > p');
  allp.forEach(function (elem){
    elem.onclick = function(){
      if (elem.classList == 'red') {
         elem.classList.remove('red')
      }else {
        elem.classList.add('red');
      }
    }
  });
}
addRed();

//add elem p
push.onclick = function(){
  let addValue = document.getElementById('value').value;
  let arrElem = document.createElement('p'); 
    if (addValue == ''){
           alert("Введите значение");
    } else {
          elemsdiv.appendChild(arrElem);
          arrElem.innerHTML = addValue;
          addRed();
          value.value = '';
    }
}

//6
//на наведение
imgclick.onmouseover = function(){
  let hiddendiv = document.querySelector('.imgdiv');
      hiddendiv.classList.remove('hidden');
      setTimeout(after, 100);
  function after() {
    hiddendiv.classList.add('imgdivlater')
  };
      setTimeout(later, 100);
  function later() {
    hiddendiv.classList.add('imgdivafter')
  };
}
//Если убрать курсор
imgclick.onmouseout = function (){
  let hiddendiv = document.querySelector('.imgdiv');
  setTimeout(hide, 2000);
    function hide() {
        hiddendiv.classList.add('hidden')
      };
}

//7&8
let imginf = imginfo.querySelectorAll(':scope > img');
imginf.forEach(function(elem){
  elem.onmouseover = function(){
    if (elem.alt == '') {
      info.classList.add('red');
      info.classList.add('redf');
      info.innerHTML = 'No alternative name';
    }else if (~elem.src.indexOf("html")) {
      info.classList.add('redf');
      info.classList.remove('red');
      info.innerHTML = 'No Adress name';
    }else{
    info.classList.remove('red','redf');
    info.innerHTML = 'Adress: ' + elem.src + ' Alt: ' + elem.alt;
    }}
});

//9
function findTeg(){
  const arr = ['h1','h2','h3','h4','h5','h6'];
      arr.forEach(function(elem){
        let findtag = document.createElement('p'),
            arrelem = document.getElementsByTagName(elem);
            findelemcontainer.appendChild(findtag);
        if(arrelem.length == 0){
          findtag.innerHTML = elem + ' not found on the page';
        }else if(arrelem.length > 0){
          findtag.innerHTML = elem + ' ' + arrelem.length + ' on the page';
        }
      })
}
findTeg();

//10
function findMeta (){
var meta = document.querySelectorAll('meta'),
    head = document.querySelectorAll('head'),
    title = document.querySelector('title');
      
    meta.forEach(function(elem){
        if (~elem.name.indexOf('description')) {
          metadesc.innerHTML = `<p> <b>Description</b> exsists </p>`;
        }else if (~elem.name.indexOf('keywords')) {
          metakey.innerHTML = `<p> <b>Keywords</b> content length is ${elem.content.length}</p>`;
         }
    })
    if (metadesc.innerHTML == '') {
      metadesc.innerHTML = 'No Meta Description found';
    }
    if (metadesc.innerHTML == '') {
      metakey.innerHTML = 'No Meta Keywords found';
    } 
    if(title.innerHTML.length > 0){
      metatitle.innerHTML = `<b>Title</b> length is ${title.innerHTML.length}`;
    } else{
      metatitle.innerHTML = `<b>No Title</b>`
    }
}
findMeta ();