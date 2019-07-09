let windowBad = document.getElementById('modal_main');
let windowGood = document.getElementById('modal_success');
let openWindowGood = document.querySelector('.show-success');

let windowClose = document.querySelectorAll('.modal__close');


function activClass(element) {
  element.className += ' modal_active';
}

function close() {
  this.closest('.modal').className = this.closest('.modal').className.replace('modal_active', '');
}

function open() {
  let closeBad = close.bind(windowBad);
  closeBad();
  activClass(windowGood);
}


activClass(windowBad);

windowClose.forEach((item) => {
  item.onclick = close;
});

openWindowGood.onclick = open;
