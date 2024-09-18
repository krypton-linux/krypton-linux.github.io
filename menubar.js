document.addEventListener('DOMContentLoaded', function() {
    let currentItem = document.querySelector('.current-item');
    let gnavListItems = document.querySelectorAll(".gnav__list__item");
    let menuBar = document.querySelector('.menu__bar');
    menuBar.style.width = currentItem.offsetWidth + "px";
    menuBar.style.left = currentItem.offsetLeft + "px";

    gnavListItems.forEach(function(item) {
    item.addEventListener("mouseover", function() {
      menuBar.style.width = item.offsetWidth + "px";
      menuBar.style.left = item.offsetLeft + "px";
    });

    item.addEventListener("mouseout", function() {
      if (currentItem) {
        menuBar.style.width = currentItem.offsetWidth + "px";
        menuBar.style.left = currentItem.offsetLeft + "px";
      } else {
        menuBar.style.width = "0";
      }
    });
  });
});
