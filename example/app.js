var mf = new MouseFollow({
  container: 'section',
  shape: 'circle',
  color: 'green',
  opacity: 0.4
});

var mf2 = new MouseFollow({
  container: 'div',
  shape: 'square',
  color: 'orange',
  opacity: 0.7
});

mf.initialize();
mf2.initialize();
