const accordeonItems = document.querySelectorAll('.description-list__item_view');


accordeonItems.forEach(item => {
  item.addEventListener('click', (e) => {
    const accordeonIcon = item.querySelector('.description_open');
    const accordeonContent = item.nextElementSibling;

    if (accordeonContent.classList.contains('active')) {
      accordeonIcon.innerHTML = '<use xlink:href="#plus"></use>'
    } else {
      accordeonIcon.innerHTML = '<use xlink:href="#minus"></use>'
    }

    accordeonContent.classList.toggle('active');
  })
});