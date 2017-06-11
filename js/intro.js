setTimeout(function(){
    document.getElementById('intro').style.opacity="0";
}, 2500);

function showIt() {
  document.getElementById("main-title").style.opacity = "1";
}
setTimeout("showIt()", 4500); // after 3 sec

function showScroll() {
  document.getElementById("scroll").style.opacity = "1";
}
setTimeout("showScroll()", 4500); // after 3 sec
