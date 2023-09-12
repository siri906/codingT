let items = document.querySelectorAll('.list_wrap .item');
items.forEach((item) => {
  item.addEventListener('mousemove', (event) => {
    let positionPx = event.x - item.getBoundingClientRect().left;
    let positionX = (positionPx / item.offsetWidth) * 100;

    let positionPy = event.y - item.getBoundingClientRect().top;
    let positionY = (positionPy / item.offsetHeight) * 100;

    item.style.setProperty('--rX', 50 - positionY + 'deg');
    item.style.setProperty('--rY', 50 - positionX + 'deg');
  });
  item.addEventListener('mouseout', () => {
    item.style.setProperty('--rX', '0deg');
    item.style.setProperty('--rY', '0deg');
  });
});

// sort
const listJobOption = document.querySelectorAll('.list_job_option a');
const wrapElements = document.querySelectorAll('.box_char');
const refreshLink = document.querySelector('.btn_refresh .refresh');

let clickedClasses = [];

listJobOption.forEach(function (option) {
  option.addEventListener('click', function (event) {
    event.preventDefault();

    const parentLi = event.target.parentNode;
    const clickedLiClass = parentLi.classList[0];

    // If the class is already in the array, remove it
    if (clickedClasses.includes(clickedLiClass)) {
      clickedClasses = clickedClasses.filter((className) => className !== clickedLiClass);

      // Use requestAnimationFrame to delay removing classes until next repaint
      document.querySelectorAll('.list_job_option .' + clickedLiClass).forEach((li) => li.classList.remove('on'));
    } else {
      clickedClasses.push(clickedLiClass);

      document.querySelectorAll('.list_job_option .' + clickedLiClass).forEach((li) => li.classList.add('on'));
    }

    wrapElements.forEach(function (wrap) {
      const hasAllClickedClasses = clickedClasses.every((className) => wrap.classList.contains(className));

      // Use requestAnimationFrame to delay adding/removing classes until next repaint
      if (hasAllClickedClasses) {
        wrap.classList.remove('hide');
        wrap.classList.add('show');
        setTimeout(() => {
          wrap.style.display = 'flex';
        }, 500); // Wait for animation to finish before setting display
      } else {
        wrap.classList.remove('show');
        wrap.classList.add('hide');
        setTimeout(() => {
          wrap.style.display = 'none';
        }, 500); // Wait for animation to finish before setting display
      }
    });
  });
});

// refresh동작
refreshLink.addEventListener('click', function () {
  refreshList();
});

const refreshList = () => {
  const listJobOptionLi = document.querySelectorAll('.list_job_option li');
  listJobOptionLi.forEach((li) => {
    li.classList.remove('on');
  });

  wrapElements.forEach(function (wrap) {
    wrap.classList.remove('hide');
    wrap.classList.add('show');
    setTimeout(() => {
      wrap.style.display = 'flex';
    }, 900);
  });
};
