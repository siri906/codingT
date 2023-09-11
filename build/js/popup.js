// popup arr fn
document.getElementById('next').onclick = function () {
  let lists = document.querySelectorAll('.item');
  document.querySelector('.slide').appendChild(lists[0]);
};
document.getElementById('prev').onclick = function () {
  let lists = document.querySelectorAll('.item');
  document.querySelector('.slide').prepend(lists[lists.length - 1]);
};

// nav fn
const navigation = document.querySelector('.navigation');
document.querySelector('.toggle').onclick = function () {
  this.classList.toggle('active');
  navigation.classList.toggle('active');
};

// popup Dim
const dim = document.querySelector('.popup_wrap .dim');
dim.addEventListener('click', function () {
  popCont.classList.remove('popup_open');
  popCont.classList.add('popup_close');
  setTimeout(() => {
    popCont.classList.remove('popup_close');
  }, 1000);
  setTimeout(function () {
    popWrap1.classList.remove('on');
  }, 1000);
});
