function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('scroll', function() {
    var currScrollPos2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (currScrollPos2 > 300) {
      document.getElementById('background').style.opacity = -currScrollPos2/400 + 2;
    }
    if (currScrollPos2 > 600) {
      document.getElementById('introMid').style.left = "-15%";
      document.getElementById('introLarge').style.left = "-10%";
      document.getElementById('introLarge').style.opacity = "0%";
      // sleep(2000);
      // document.getElementById('background').style.left = "-200%";
    }
    else{
        document.getElementById('introMid').style.left = "15%";
        document.getElementById('introLarge').style.left = "10%";
        document.getElementById('introLarge').style.opacity = "100%";
        document.getElementById('introSmall').style.left = "15%";
        document.getElementById('background').style.display = "inline";
    }
  }
);

function scrollDown(){
    window.scroll(0, 1000)
}