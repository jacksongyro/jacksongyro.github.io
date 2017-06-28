function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const animatedObjects = document.querySelectorAll('.slide-in');

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
  });
}

window.addEventListener('scroll', debounce(checkSlide));

DomReady.ready(function() {
  const logo = new Vivus('jg', {type: 'async', duration: 200, start: 'manual'});

  setTimeout(function(){
    logo.play(1, function(obj) {
      obj.el.classList.add('done');
    });
  }, 500);

  checkSlide();
  
});
