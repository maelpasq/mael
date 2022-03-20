window.onscroll = function () {
  if(document.documentElement.scrollTop > 80) {
    document.getElementById("top-nav").className = "scroll-active";
    document.getElementById("trait").className = "scroll-active";
  } else {
    document.getElementById("top-nav").className = "";
    document.getElementById("trait").className = "";
  }
}