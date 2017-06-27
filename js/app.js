DomReady.ready(function() {
  new Vivus('jg', {type: 'async', duration: 200, start: 'autostart'}, function(obj) {
    obj.el.classList.add('done');
  });

  document.querySelector('h1.comingsoon').style.top = '0';
  document.querySelector('h1.address').style.opacity = '1';
  document.querySelector('.social').style.bottom = '0';
});
