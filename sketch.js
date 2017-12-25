let url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=',
  dat, inp = [],
  btn, pre;

function setup() {
  btn = select('#in');
}

function draw() {
  if (pre != btn.value()) {
    pre = btn.value();
    loadJSON(url + pre, loadd, 'jsonp');
  }
}

function loadd(data) {
  dat = data;
  if (inp) {
    for (let i = inp.length - 1; i >= 0; i--) {
      inp[i].style('display', 'none');
    }
  }
  if (dat) {
    for (let i = 0; i < dat[1].length; i++) {
      let x = createDiv('<a href="' + dat[3][i] + '"><b>' + dat[1][i] + '</b></a><hr><br>' + dat[2][i]);
      let y = ["animated fadeInLeft", "animated fadeInRight"];
      x.class(random(y));
      inp.push(x);
    }
  }
}
