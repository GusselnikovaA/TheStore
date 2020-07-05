const minus = document.querySelector('.buy-quantity__minus');
const plus = document.querySelector('.buy-quantity__plus');
const amount = document.querySelector('.buy-quantity__value');

// if(amount.value == '') {
//   amount.value = 1
// }

minus.addEventListener('click', (e) => {
  e.preventDefault();

  if(amount.value > 1) {
    amount.value--;
  }
});

plus.addEventListener('click', (e) => {
  e.preventDefault();

  if(amount.value < 10) {
    amount.value++;
  }
});

amount.addEventListener('keyup', (e) => {
  if(amount.value < 1) {
    amount.value = 1;
  }

  if(amount.value > 10) {
    amount.value = 10;
  }
})