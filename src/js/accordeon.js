const accordeonItems = document.querySelectorAll('.accordeon-headline');

accordeonItems.forEach(item => {
  item.addEventListener('click', (e) => {
    const accordeonButton = item.querySelector('.accordeon-button');
    const accordeonContent = item.nextElementSibling;

    if (accordeonContent.classList.contains('active')) {
      accordeonButton.innerHTML = '<use xlink:href="#plus"></use>'
    } else {
      accordeonButton.innerHTML = '<use xlink:href="#minus"></use>'
    }

    accordeonContent.classList.toggle('active');
  })
});