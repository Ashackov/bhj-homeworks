function rotateText() {
  const rotator = document.querySelector('.rotator');
  const cases = rotator.querySelectorAll('.rotator__case');
  let currentIndex = 0;

  function showNextCase() {
    cases[currentIndex].classList.remove('rotator__case_active');

    currentIndex = (currentIndex + 1) % cases.length;

    cases[currentIndex].classList.add('rotator__case_active');
  }

  showNextCase();

  setInterval(showNextCase, 1000);
}

rotateText();
