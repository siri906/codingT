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
      text: '스트리트파이터(남)',
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
const body = document.querySelector('body');

navlist.addEventListener('click', function (event) {
  event.preventDefault();

  let clickTitle = event.target.innerHTML;
  const targerStyle = window.getComputedStyle(event.target);
  const iNum = parseInt(targerStyle.getPropertyValue('--i'));

  titleName.innerHTML = clickTitle;
  document.querySelector('.navigation .toggle').classList.remove('active');
  navigation.classList.remove('active');

  // 팝업세팅 변경 fn
  popupSet(iNum);

  // 이미지 변경 fn
  changeImg(iNum);
  // animation fn
  navClickAni();
});

// 썸네일 이미지 재배치 (html 재생성)
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
    divItem.addEventListener('click', () => {
      popWrap1.classList.add('on');
      popCont.classList.add('popup_open');
    });
  });
};

// 팝업함수
const popupSet = (iNum) => {
  const defaultNum = 0;
  const processedNum = iNum || defaultNum;
  const slides = document.querySelectorAll('.popup_wrap .slide');

  slides.forEach((item, index) => {
    if (index === processedNum) {
      item.classList.add('on');
      body.classList.add('on');
    } else {
      item.classList.remove('on');
      body.classList.add('on');
    }
  });

  // 클릭한 item 찾는 함수
  container.addEventListener('click', function (event) {
    if (event.target.classList.contains('box')) {
      const clickedClass = event.target.classList[1];
      const clickedContainClass = event.target.offsetParent.classList[1];
      const slide = document.querySelector(`.popup_wrap .${clickedContainClass}`);

      const slideItems = Array.from(slide.querySelectorAll('.item'));

      const rearrangedItems = [];

      let currentIndex = slideItems.findIndex((item) => item.classList.contains(clickedClass));

      for (let i = 0; i < slideItems.length; i++) {
        rearrangedItems.push(slideItems[currentIndex]);
        currentIndex = (currentIndex + 1) % slideItems.length;
      }
      // 이전 내용 초기화
      while (slide.firstChild) {
        slide.removeChild(slide.firstChild);
      }
      // rearrangedItems를 순차적으로 추가
      rearrangedItems.forEach((item) => {
        slide.appendChild(item);
      });
    }
  });
};

// ani fn
const navClickAni = () => {
  container.classList.add('close_open');
  setTimeout(() => {
    container.classList.remove('close_open');
  }, 700);
};

// 기본
containerInBox.forEach((item) => {
  popCont.classList.remove('popup_close');
  item.addEventListener('click', () => {
    popWrap1.classList.add('on');
    popCont.classList.add('popup_open');
    popupSet(0);
  });
});

// 버튼액션
const btnActiveShow = document.querySelector('.btn_area .btn_active');

function toggleClick(event) {
  let clickedBtn = event.target;

  if (clickedBtn.classList.contains('active')) {
    return false;
  } else {
    const btnActive = document.querySelectorAll('.toggle-btn');
    btnActive.forEach((btn) => {
      btn.classList.remove('active');
    });
    clickedBtn.classList.add('active');
    let getWhere = clickedBtn.classList[1];
    btnActiveShow.classList.remove('left');
    btnActiveShow.classList.remove('right');
    btnActiveShow.classList.add(getWhere);
    zipIn();
  }
}
