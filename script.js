document.addEventListener('scroll', function() {
    var currScrollPos2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (currScrollPos2 > 300) {
      document.getElementById('background').style.opacity = -currScrollPos2/400 + 2;
    }
    if (currScrollPos2 > 600) {
      document.getElementById('introMid').style.left = "-15%";
      document.getElementById('introLarge').style.left = "-10%";
      document.getElementById('introLarge').style.opacity = "0%";
      document.getElementById('introSmall').style.left = "-15%";
      document.getElementById('profileHolder').style.left = "-31%";
    }
    else{
        document.getElementById('introMid').style.left = "15%";
        document.getElementById('introLarge').style.left = "10%";
        document.getElementById('introLarge').style.opacity = "100%";
        document.getElementById('introSmall').style.left = "15%";
        document.getElementById('profileHolder').style.left = "31%";
    }
  }
);

function scrollDown(){
    window.scroll(0, 1000)
}