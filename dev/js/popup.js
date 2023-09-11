// popup arr fn
document.getElementById('next').onclick = function (event) {
  let lists = document.querySelectorAll('.popup_wrap .slide.on .item');
  document.querySelector('.popup_wrap .slide.on').appendChild(lists[0]);
};

document.getElementById('prev').onclick = function () {
  let lists = document.querySelectorAll('.popup_wrap .slide.on .item');
  document.querySelector('.popup_wrap .slide.on').prepend(lists[lists.length - 1]);
};
// 마우스 휠
// function sliderMouseEvent(event) {
//   const scollY = Math.sign(event.deltaY);

//   if (scollY > 0) {
//     let lists = document.querySelectorAll('.popup_wrap .slide.on .item');
//     document.querySelector('.popup_wrap .slide.on').appendChild(lists[0]);
//   } else if (scollY < 0) {
//     let lists = document.querySelectorAll('.popup_wrap .slide.on .item');
//     document.querySelector('.popup_wrap .slide.on').prepend(lists[lists.length - 1]);
//   }
// }

// 마우스 휠 이벤트 리스너 등록

// var checkOn = document.querySelector('.content_area .thm_wrap');

// if (checkOn.classList.contains('on')) {
//   checkOn.addEventListener('wheel', sliderMouseEvent);
// }

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
  }, 1000);
});

// button wrapchange
const switchBtn = document.querySelector('.wrap_change button');

// switchBtn.addEventListener('click', function (event) {
//   contenArea.classList.add('zip_in');
//   setTimeout(() => {
//     contenArea.classList.remove('zip_in');
//   }, 3200);
// });

// 화면 토글
function toggleItems() {
  const items = Array.from(document.querySelectorAll('.content_area > div'));
  const contentArea = document.querySelector('.content_area');
  const currentItemIndex = items.findIndex((item) => item.classList.contains('on'));
  const nextItemIndex = (currentItemIndex + 1) % items.length;

  contentArea.classList.add('zip_in');

  setTimeout(() => {
    items[currentItemIndex].classList.remove('on');
    items[nextItemIndex].classList.add('on');
  }, 2000);

  setTimeout(() => {
    contentArea.classList.remove('zip_in');
  }, 4000);
}
