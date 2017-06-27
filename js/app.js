DomReady.ready(function() { 
  new Vivus('jg', {type: 'async', duration: 200, start: 'inViewport'}, function(obj) {
    obj.el.classList.add('done');
  });
});
