// popup arr fn
document.getElementById('next').onclick = function () {
  let lists = document.querySelectorAll('.popup_wrap .slide.on .item');
  document.querySelector('.popup_wrap .slide.on').appendChild(lists[0]);
};

document.getElementById('prev').onclick = function () {
  let lists = document.querySelectorAll('.popup_wrap .slide.on .item');
  document.querySelector('.popup_wrap .slide.on').prepend(lists[lists.length - 1]);
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
    popWrap.classList.remove('on');
    body.classList.remove('on');
  }, 1000);
});

// 화면 토글
function zipIn() {
  const items = Array.from(document.querySelectorAll('.content_area > div'));
  const contentArea = document.querySelector('.content_area');
  const wrapChange = document.querySelector('.wrap_change');
  const currentItemIndex = items.findIndex((item) => item.classList.contains('on'));
  const nextItemIndex = (currentItemIndex + 1) % items.length;

  contentArea.classList.add('zip_in');
  wrapChange.classList.add('hide');

  setTimeout(() => {
    items[currentItemIndex].classList.remove('on');
    items[nextItemIndex].classList.add('on');
  }, 2000);

  setTimeout(() => {
    wrapChange.classList.remove('hide');
    contentArea.classList.remove('zip_in');
  }, 4000);
}
