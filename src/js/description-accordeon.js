const items = document.querySelectorAll('.description-list__item_view');

items.forEach(item => {
  item.addEventListener('click', (e) => this.classList.add('active'));
});