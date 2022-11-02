var x = document.getElementById('check');
let val = false;
x.addEventListener('click', () => {
  val = !val;
  //   document.getElementById('ch').backgroundColor = '#bdc1c0;';
  if (val == true) {
    document.getElementById('ch').classList.add('active');
  } else {
    document.getElementById('ch').classList.remove('active');
  }

  // document.getElementById('ch').style.borderBottom = '5px solid black';
  // document.getElementById('ch').style.width = '1rem';
});
function hide() {
  const close = document.getElementById('addtocart');
  close.style.display = 'none';
}
function show() {
  const close = document.getElementById('addtocart');
  close.style.display = 'flex';
}
window.onload((document.getElementById('addtocart').style.display = 'none'));
var val2 = false;
function showangel() {
  val2 = !val2;
  if (val2 == true) {
    document.getElementById('exp-row').style.display = 'flex';
  } else {
    document.getElementById('exp-row').style.display = 'none';
  }
}
// var slider = document.getElementById('myRange');
// var output = document.getElementById('demo');
// output.innerHTML = slider.value;

// slider.oninput = function (e) {
//   output.innerHTML = this.value;
// };
// function sliderChange(val) {
//   document.getElementById('demo').innerHTML = val;
// }

function myFunction() {
  var x = document.getElementById('topnavbar');
  if (x.className === 'navbar') {
    x.className += ' responsive';
  } else {
    x.className = 'navbar';
  }
}
var btnNav = false;
function navabrBtnShow() {
  btnNav = !btnNav;
  // document.getElementById('navbar-btn').style.display = 'none';
  if (btnNav == true) {
    document.getElementById('nav').style.display = 'flex';
  }
}
