// targeting element for latter adding event Listener and other stuffs.
let hamburger = document.getElementById('clickAction');

let show = document.getElementById('show');

let goTop = document.getElementById('goTop');

// function to handle click on the ham-burger
function clickHandler() {
  show.classList.toggle('d-none');
}

// Adding click event on the ham-burger icon.
hamburger.addEventListener('click', clickHandler);

// Adding click event on the whole navigation section if anything clicked if will close the navigation part.
show.addEventListener('click', clickHandler);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

// user scroll handler function
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTop.style.display = 'block';
  } else {
    goTop.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function goTopEventHandler() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// top button click handler to go top
goTop.addEventListener('click', goTopEventHandler);
