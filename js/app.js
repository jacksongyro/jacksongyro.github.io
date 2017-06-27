DomReady.ready(function() {
  new Vivus('jg', {type: 'async', duration: 200, start: 'autostart'}, function(obj) {
    obj.el.classList.add('done');
  });
});
