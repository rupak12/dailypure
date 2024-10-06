let saveAddresses = document.querySelectorAll('.save__addresses')
saveAddresses.forEach((x) => {
  x.addEventListener('click', () => {
    if(x.classList.add('saveBtn')){
      x.classList.remove('saveBtn')
    }else {
      x.classList.add('saveBtn')
    }

    saveAddresses.forEach((e) => {
      if (e !== x) {
        e.classList.remove("saveBtn");
      }
    });
  })
});

let checkCard = document.querySelectorAll('.subscription__single__card');
let checkInput = document.querySelector('.meal_check');
// let checkCard = document.querySelectorAll('.meal-check');
checkCard.forEach(x => {
  x.addEventListener('click',() => {
    if(x.classList.add('checkActive') && checkInput.classList.add('mealCheck')){
      x.classList.remove('checkActive')
      checkInput.classList.remove('mealCheck')
    }else {
      x.classList.add('checkActive')
      checkInput.classList.add('mealCheck')
    }

    checkCard.forEach((e) => {
      if (e !== x) {
        e.classList.remove("checkActive");
        checkInput.classList.remove('mealCheck')
      }
    });
  })
});

let addressCard = document.querySelectorAll('.address__card__place');
let checkCircle = document.querySelector('.lucide-check-circle');
// let checkCard = document.querySelectorAll('.meal-check');
addressCard.forEach(x => {
  x.addEventListener('click',() => {
    if(x.classList.add('checkActive') && checkCircle.classList.add('checkCircle')){
      x.classList.remove('checkActive')
      checkCircle.classList.remove('checkCircle')
    }else {
      x.classList.add('checkActive')
      checkCircle.classList.add('checkCircle')
    }

    addressCard.forEach((e) => {
      if (e !== x) {
        e.classList.remove("checkActive");
        checkCircle.classList.remove('checkCircle')
      }
    });
  })
});

let plus = document.querySelector('.plus');
let count = document.querySelector('.count');
let minus = document.querySelector('.minus');

let a = 0;
plus.addEventListener('click',() => {
  a++;
  a =(a > 5) ? a : a;
  count.innerText = a;
})
minus.addEventListener('click',() => {
  if(a > 1){
    a--;
    a = (a < 5) ? a : a;
    count.innerText = a;
  }
})





$(document).ready(function () {
  $(".header__bar , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay,.header__area").addClass("active");
  });
  $(".menu-close , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay,.header__area").removeClass("active");
    
  });
  
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header__area").removeClass("scroll-header");
    } else {
      $(".header__area").addClass("scroll-header");
    }
  });
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  
});

function add(x){
  x.classList.toggle("add")
}


const calendaredd = document.getElementById('calendaredd');
const prevWeekBtn = document.getElementById('prevWeek');
const nextWeekBtn = document.getElementById('nextWeek');
const slider = document.getElementById('slider');
const sliderTitle = document.getElementById('slider-title');
const sliderDate = document.getElementById('slider-date');
const sliderDescription = document.getElementById('slider-description');

const daysOfWeeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const monthss = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

let currentDatesss = new Date();
let startDates = new Date(currentDatesss);

function generateCalendar(startDates) {
    const daysHTML = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(startDates);
        date.setDate(startDates.getDate() + i);
        const dayNames = daysOfWeeks[date.getDay()];
        const dayNumbers = date.getDate();
        const monthNames = monthss[date.getMonth()];
        const isSelected = (date.toDateString() === new Date().toDateString()) ? 'selected' : '';
        daysHTML.push(`<div class="day ${isSelected}" data-date="${date}">${dayNames} <br> ${dayNumbers} <br> ${monthNames}</div>`);
    }
    calendaredd.innerHTML = daysHTML.join('');
    updateButtonState();
    addDayClickEvent();
}

function updateButtonState() {
    prevWeekBtn.disabled = startDates <= new Date();
}

function addDayClickEvent() {
    const dayElements = calendaredd.getElementsByClassName('day');
    for (let dayElement of dayElements) {
        dayElement.addEventListener('click', function() {
            clearSelectedState();
            dayElement.classList.add('clicked');
            slider.style.display = 'flex';
            const selectedDate = new Date(dayElement.dataset.date);
            sliderTitle.innerText = "Selected Date";
            sliderDate.innerText = `${daysOfWeeks[selectedDate.getDay()]} ${selectedDate.getDate()} ${monthss[selectedDate.getMonth()]}`;
            sliderDescription.innerText = "You have selected this date.";
        });
    }
}

function clearSelectedState() {
    const dayElements = calendaredd.getElementsByClassName('day');
    for (let dayElement of dayElements) {
        dayElement.classList.remove('clicked');
        dayElement.classList.remove('selected');
    }
}

prevWeekBtn.addEventListener('click', () => {
    startDates.setDate(startDates.getDate() - 7);
    generateCalendar(startDates);
});

nextWeekBtn.addEventListener('click', () => {
    startDates.setDate(startDates.getDate() + 7);
    generateCalendar(startDates);
});

generateCalendar(startDates);
