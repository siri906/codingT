// img list
const bgItem = [
  [
    // 남자 귀검사
    {
      img: "url('https://cdn.df.nexon.com/img/char_info/bg/bg01_3.jpg')",
      text: '웨펀마스터',
    },
    {
      img: "url('https://cdn.df.nexon.com/img/char_info/bg/bg02_3.jpg')",
      text: '소울브링어',
    },
    {
      img: "url('https://cdn.df.nexon.com/img/char_info/bg/bg03_3.jpg')",
      text: '버서커',
    },
    {
      img: "url('https://cdn.df.nexon.com/img/char_info/bg/bg04_3.jpg')",
      text: '아수라',
    },
    {
      img: "url('https://cdn.df.nexon.com/img/char_info/bg/bg05_3.jpg')",
      text: '검귀',
    },
  ],
  [
    {
      img: "url('https://cdn.df.nexon.com/img/char_info/bg/bg06_3.jpg')",
      text: '소드마스터',
    },
    {
      img: "url('https://cdn.df.nexon.com/img/char_info/bg/bg07_3.jpg')",
      text: '데몬슬레이어',
    },
    {
      img: "url('https://cdn.df.nexon.com/img/char_info/bg/bg08_3.jpg')",
      text: '베가본드',
    },
    {
      img: "url('https://cdn.df.nexon.com/img/char_info/bg/bg09_3.jpg')",
      text: '다크템플러',
    },
    {
      img: "url('https://cdn.df.nexon.com/img/char_info/bg/bg62_3.jpg')",
      text: '블레이드',
    },
  ],
  [
    {
      img: "url('https://cdn.df.nexon.com/img/char_info/bg/bg10_3.jpg')",
      text: '넨마스터(남)',
    },
    {
      img: "url('https://cdn.df.nexon.com/img/char_info/bg/bg11_3.jpg')",
      text: '스트라이커(남)',
    },
    {
      img: "url('https://cdn.df.nexon.com/img/char_info/bg/bg12_3.jpg')",
      text: '스트라이커(남)',
    },
    {
      img: "url('https://cdn.df.nexon.com/img/char_info/bg/bg13_3.jpg')",
      text: '그래플러(남)',
    },
  ],
  [
    {
      img: "url('https://cdn.df.nexon.com/img/char_info/bg/bg40_3.jpg')",
      text: '크루세이더(여)',
    },
  ],
  [
    {
      img: "url('https://cdn.df.nexon.com/img/char_info/bg/bg31_3.jpg')",
      text: '엘레멘탈마스터',
    },
    {
      img: "url('https://cdn.df.nexon.com/img/char_info/bg/bg32_3.jpg')",
      text: '소환사',
    },
    {
      img: "url('https://cdn.df.nexon.com/img/char_info/bg/bg33_3.jpg')",
      text: '배틀메이지',
    },
    {
      img: "url('https://cdn.df.nexon.com/img/char_info/bg/bg34_3.jpg')",
      text: '마도학자',
    },
    {
      img: "url('https://cdn.df.nexon.com/img/char_info/bg/bg35_3.jpg')",
      text: '인챈트리스',
    },
  ],
];

// nav list fn
const container = document.querySelector('.wrap_visual .container');
const containerInBox = document.querySelectorAll('.wrap_visual .container .box');
const popWrap = document.querySelector('.popup_wrap .slide');
const popWrap1 = document.querySelector('.popup_wrap');
const popCont = document.querySelector('.popup_wrap .content');
const navlist = document.querySelector('.navigation .list_job');
const titleName = document.querySelector('.title_job');
const listItems = document.querySelectorAll('.list_job li');
const slide = document.querySelector('.popup_wrap .slide');

navlist.onclick = function (event) {
  event.preventDefault();
  let clickTitle = event.target.innerHTML;
  const targerStyle = window.getComputedStyle(event.target);
  const iNum = parseInt(targerStyle.getPropertyValue('--i'));
  titleName.innerHTML = clickTitle;
  document.querySelector('.toggle').classList.remove('active');
  navigation.classList.remove('active');

  // 클릭 i넘버 가져오기
  imgChangeAni();
  changeImg(iNum);
  // slide.innerHTML = '';
  // popupSet(bgItem[iNum].length);
};

const imgChangeAni = () => {
  const container = document.querySelector('.wrap_visual .container');

  navlist.addEventListener('click', (event) => {
    event.preventDefault();
    container.classList.add('close_open');
    setTimeout(() => {
      container.classList.remove('close_open');
    }, 700);
  });
};

const changeImg = (iNum) => {
  const defaultItem = 0;
  const processedItem = iNum || defaultItem;
  const itemBgList = bgItem[processedItem];
  const popCont = document.querySelector('.popup_wrap > .content');
  var className = Array.from(container.classList)[1];
  const classes = ['bKnight', 'gKnight', 'bfighter', 'gpriest', 'gwizard'];

  if (processedItem >= 0 && processedItem < classes.length) {
    container.classList.remove(className);
    container.classList.add(classes[processedItem]);
    popWrap.classList.remove(className);
    popWrap.classList.add(classes[processedItem]);
  }

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  itemBgList.forEach((item, index) => {
    const divItem = document.createElement('div');
    const numClass = `num_${index + 1}`;
    const styleValue = `${item.img}`;

    divItem.classList.add(`box`);
    divItem.classList.add(numClass);
    divItem.style.setProperty('--img', styleValue);
    divItem.setAttribute('data-text', item.text);
    container.appendChild(divItem);

    popupSet(itemBgList.length);

    divItem.addEventListener('click', () => {
      popWrap1.classList.add('on');
      popCont.classList.add('popup_open');
    });
  });
};

const popupSet = (itemCount) => {
  const container = document.querySelector('.wrap_visual .container');
  const slide = document.querySelector('.popup_wrap .slide');

  // itemCount에 따라서 slide에 item 요소 생성
  for (let i = 1; i <= itemCount; i++) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.classList.add(`num_${i}`);

    slide.appendChild(itemDiv);
  }

  container.addEventListener('click', function (event) {
    if (event.target.classList.contains('box')) {
      const clickedClass = event.target.classList[1];
      const items = Array.from(slide.getElementsByClassName('item'));
      const reorderedItems = [];

      // 해당 클래스를 가지고 있는 아이템을 찾아서 순차적으로 정렬
      let startIndex;

      items.forEach((item, index) => {
        if (item.classList.contains(clickedClass)) {
          startIndex = index;
        }
        reorderedItems.push(item);
      });

      // 순차적으로 정렬된 아이템을 slide에 추가
      slide.innerHTML = '';

      for (let i = startIndex; i < itemCount; i++) {
        slide.appendChild(reorderedItems[i]);
      }

      for (let i = 0; i < startIndex; i++) {
        slide.appendChild(reorderedItems[i]);
      }
    }
  });
};
// popup html 세팅-
// const popupSet = (itemCount) => {

//   const container = document.querySelector('.wrap_visual .container');
//   const slide = document.querySelector('.popup_wrap .slide');

//   container.addEventListener('click', function (event) {
//     if (event.target.classList.contains('box')) {
//       const clickedClass = event.target.classList[1];
//       const items = Array.from(slide.getElementsByClassName('item'));
//       const itemCount = items.length;

//       // 해당 클래스를 가지고 있는 아이템을 찾아서 순차적으로 정렬
//       const reorderedItems = [];
//       let startIndex = -1;

//       for (let i = 0; i < itemCount; i++) {
//         if (items[i].classList.contains(clickedClass)) {
//           startIndex = i;
//           break;
//         }
//       }

//       if (startIndex !== -1) {
//         for (let i = startIndex; i < itemCount; i++) {
//           reorderedItems.push(items[i]);
//         }

//         for (let i = 0; i < startIndex; i++) {
//           reorderedItems.push(items[i]);
//         }

//         // 순차적으로 정렬된 아이템을 slide에 추가
//         slide.innerHTML = '';

//         reorderedItems.forEach(function (item) {
//           slide.appendChild(item);
//         });
//       }
//     }
//   });
// };

// 기본
containerInBox.forEach((item) => {
  popCont.classList.remove('popup_close');
  item.addEventListener('click', () => {
    popWrap1.classList.add('on');
    popCont.classList.add('popup_open');
  });
});

// 화면전환
const link = document.querySelector('.link');
const thm = document.querySelector('.thm');
const list = document.querySelector('.list_wrap');

link.addEventListener('click', function (e) {
  e.preventDefault();
  if (thm.style.display === 'block') {
    // 현재 thm이 보여지고 있을 때
    thm.style.animationName = 'fadeOut';
    list.style.animationName = 'fadeIn';

    setTimeout(function () {
      // 애니메이션이 완료된 후에 화면 전환 수행
      thm.style.display = 'none';
      list.style.display = 'block';
    }, parseInt(getComputedStyle(thm).animationDuration) * 1000); // 애니메이션 지속 시간만큼 딜레이 설정
  } else {
    // 현재 list가 보여지고 있을 때
    list.style.animationName = 'fadeOut';
    thm.style.animationName = 'fadeIn';

    setTimeout(function () {
      // 애니메이션이 완료된 후에 화면 전환 수행
      list.style.display = 'none';
      thm.style.display = 'block';
    }, parseInt(getComputedStyle(list).animationDuration) * 1000); // 애니메이션 지속 시간만큼 딜레이 설정
  }
});
