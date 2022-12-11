'use strict'
//gamburger-menu
document.querySelector('.burger').addEventListener('click', function () {
   document.querySelector('.burger span').classList.toggle('active'
   );
   document.querySelector('.menu').classList.toggle("animate");
});

//HowToOrder-accordeon
/*находим все нужные нам headingElem*/
let allElems = document.querySelectorAll('.accordion__heading');
/*прогоняем из через цикл*/
allElems.forEach((elem)=>{
    /*вещаем на каждый элемент обработчик на событие click*/
    elem.addEventListener('click', function(){
        /*у нажатого элемента получаем родителя*/
        let parentElem = this.parentNode;
        /*находим элемент с контентом*/
        let contentBlock = parentElem.querySelector('.accordion__content')
        /*аналогичная проверка на наличие класса active*/
        if(contentBlock.classList.contains('open')) {
            contentBlock.classList.remove('open');
        }
        else {
            contentBlock.classList.add('open');
        }
    })
})

