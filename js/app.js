const body = document.querySelector('body');
const animatedObjects = body.querySelectorAll('.slide-in');
const socialFooter = body.querySelector('.social');
const logo = body.querySelector('svg#jg');
const walk = 20;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = body;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  logo.style.filter = `
    drop-shadow(${xWalk}px ${yWalk}px 5px rgba(0,0,0,0.5) )
  `;
  console.log(xWalk, yWalk);
}

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
      body.addEventListener('mousemove', shadow);
    });
  }, 500);

  checkSlide();
  
});
