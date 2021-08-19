$(document).ready(function () {
  let currentFloor = 2; //переменная, где храниться текущий этаж  
  let floorPath = $('.home-image path');// каждый отдельный этаж
  let counterUp = $(".counter-up"); /*Кнопка увеличения этажа*/
  let counterDown = $(".counter-down"); /*Кнопка уменьшения этажа */
  /*При наведении мышкой на этаж */
  floorPath.on('mouseover', function(){
    floorPath.removeClass("current-floor"); //удаляем активный тогле класс у этажей
   currentFloor = $(this).attr('data-floor');//получаем значение текущего этажа
   $('.counter').text(currentFloor); //Записываем полученное значение в счетчик справа
 });

 
  counterUp.on("click", function () {  //отслеживаем клик по кнопке вверх

    if (currentFloor<18){  // условие значение этажа не больше 18
      currentFloor++;  //прибавляем 1 этаж
      useCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }); // форматирование этажа 01
      
      $(".counter").text(useCurrentFloor); //Записываем полученное значение в счетчик справа
      floorPath.removeClass("current-floor"); //удаляем активный тогле класс у этажей
      $(`[data-floor=${useCurrentFloor}]`).toggleClass("current-floor"); //добавляем класс для подсвечивания текущего этажа
    }
  });

  counterDown.on('click', function(){

    if(currentFloor>2){
      currentFloor--;
      useCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

      $(".counter").text(useCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${useCurrentFloor}]`).toggleClass("current-floor");
      
    }
  })

});

