window.onscroll = function () {
  if(document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").className = "scroll-active";
  } else {
    document.getElementById("navbar").className = "";
  }
}