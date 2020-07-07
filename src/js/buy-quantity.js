const minus = document.querySelector('.buy-quantity__minus');
const plus = document.querySelector('.buy-quantity__plus');
const minusIcon = document.querySelector('.buy-quantity__minus-icon');
const plusIcon = document.querySelector('.buy-quantity__plus-icon');
const amount = document.querySelector('.buy-quantity__value');

minus.addEventListener('click', (e) => {
  e.preventDefault();

  if(amount.value > 1) {
    amount.value--;
  };

  colorChange(amount.value);
});

plus.addEventListener('click', (e) => {
  e.preventDefault();

  if(amount.value < 10) {
    amount.value++;
  };

  colorChange(amount.value);
});

amount.addEventListener('keydown', (event) => {

  if ((event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode === 8 || event.keyCode === 39 || event.keyCode === 37) {
      return
  } else {
    event.preventDefault();
  };

  if(amount.value < 1) {
    amount.value = 1;
  };

  if(amount.value > 10) {
    amount.value = 10;
  };

  colorChange(amount.value);
})

function colorChange(value) {
  if (value == 1) {
    minusIcon.style.stroke = '#BDBDBD';
    plusIcon.style.stroke = '#212121';
  }

  if (value >= 2 && value <= 9 ) {
    minusIcon.style.stroke = '#212121';
    plusIcon.style.stroke = '#212121';
  }

  if (value == 10) {
    minusIcon.style.stroke = '#212121';
    plusIcon.style.stroke = '#BDBDBD';
  }
};