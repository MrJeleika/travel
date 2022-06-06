//*Animation on scroll
// Add html class  //* _anim-items | can be changed
// Add to css
//  css: {
//   object{
//     transform: from what side you need to animate;
//     opacity: 0;
//     &._active{ | can be changed
//       transform: start position(0,0,0)
//       opacity: 1;
//     }
//   } 
// }
// ! OR
// Add mixin
// @mixin animateItem($from,$to: translate(0,0)){
//   transform: #{$from};
//   opacity: 0;
//   &._active{
//     opacity: 1;
//     transform: #{$to};
//   }
// }

let animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      }else{
        animItem.classList.remove('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(()=>{
    animOnScroll();
  },300);

}