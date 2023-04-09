const moreInfoBtns = document.querySelectorAll('.more-info-btn');

moreInfoBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const moreInfo = btn.nextElementSibling;
    moreInfo.classList.toggle('active');
  });
});
