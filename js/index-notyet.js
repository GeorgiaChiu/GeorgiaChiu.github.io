var c = document.getElementById('canv'),
  $ = c.getContext('2d'),
  w = c.width = window.innerWidth,
  h = c.height = window.innerHeight,
  t = 0, num = 640, u=0,
  s, a, b, 
  x, y, _x, _y,
  _t = 1 / 30;

var anim = function() {
  $.fillStyle = 'hsla(0, 0%, 90%, 1)';
  $.fillRect(0, 0, w, h);
  for (var i = 0; i <1; i++) {
    x = 0;
    $.beginPath();
    for (var j = 0; j < num; j++) {
      x -= 1.50 * Math.cos(2);
      y = x * Math.sin(i + 4.0 * t + x /70) / 7;
      _x = x * Math.cos(i) - y * Math.sin(b);
      _y = x * Math.sin(i) + y * Math.cos(b);
      b = (j) * Math.PI / 2.5;
      $.lineWidth = 1;
      $.lineTo(w/2 +_x, h / 2 -_y);
    }
    $.strokeStyle = 'hsla(0,0%,35%,1)';
    $.stroke();
    u-=.2;
  }
  t += _t;
  window.requestAnimationFrame(anim);
  txt();
};
anim();

function txt(){
  var t = "coming soon...".split("").join(String.fromCharCode(0x2006));
  $.font = "4em Marck Script";
  $.fillStyle = 'hsla(0,0%,46%,1)';
  $.fillText(t, (c.width - $.measureText(t).width/.5051)*0.5, c.height * 0.502);
}
window.addEventListener('resize', function() {
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
}, false);