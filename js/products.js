setInterval(function(){
    if(window.pageYOffset >= 1480){
        productNav.style.visibility = 'visible';
        productNav.classList.add('fixed');
    } else {
        productNav.style.visibility = 'hidden';
        productNav.classList.remove('fixed');
    }
  },100);