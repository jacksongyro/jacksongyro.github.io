const animatedObjects = document.querySelectorAll('.slide-in');
const socialFooter = document.querySelector('.social');

function checkSlide() {
  animatedObjects.forEach(sliderImage => {
    // half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.clientHeight / 2);
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.clientHeight;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    }
    if(socialFooter.classList.contains('active')) {
      window.removeEventListener('scroll', checkSlide);
    }
  });
}

window.addEventListener('scroll', checkSlide);

DomReady.ready(function() {
  const logo = new Vivus('jg', {type: 'async', duration: 200, start: 'manual'});

  setTimeout(function(){
    logo.play(1, function(obj) {
      obj.el.classList.add('done');
    });
  }, 500);

  checkSlide();
  
});
