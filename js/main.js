// front screen 없어지는 효과
const fadeInBox = document.querySelector('.front-screen');
const fadeInMain = document.querySelector('.main');

fadeInBox.style.transition = "500ms"
window.addEventListener('load',() => {
  setInterval(() => {
    fadeInBox.classList.replace("opacity1","opacity0");  
    fadeInBox.classList.replace("z-ind1","z-ind0");  
    fadeInMain.classList.replace("opacity0","opacity1");
  }, 1500);
})

// main sub-img 흔드는 효과

window.addEventListener("load", function() {
  let subImg = document.querySelector('.main-sub-img');
    subImg.onclick = function() {
      this.animate([
          { left: "0%", transform: "rotate(0deg)" },
          { left: "50%", transform: "rotate(80deg)" }
      ], 500);        
    };
});

// // Scroll하면 나타나는 효과
// const aboutTop = document.querySelector('.about-top');
// const aboutBottom = document.querySelector('.about-bottom');

// new ScrollMagic
//   .Scene({ // 감시할 장면(Scene)을 추가
//     triggerElement: aboutTop, // 보여짐 여부를 감시할 요소를 지정
//     triggerHook: .6 // 화면의 80% 지점에서 보여짐 여부 감시
//   })
//   .setClassToggle(aboutTop, 'show') // 요소가 화면에 보이면 show 클래스 추가
//   .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)