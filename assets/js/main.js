var hamburger = $("i.fa-bars");
var hamburgerMenu = $("div.hamburger-menu");
hamburger.click(function(){
    hamburger.hide();
    hamburgerMenu.fadeIn();
})
var croce = $("a.close");
croce.click(function(){
    hamburgerMenu.fadeOut();
    hamburger.show();
})