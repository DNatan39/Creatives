var content = document.querySelector('#Nhamburger-content');
var sidebarBody = document.querySelector('#Nhamburger-sidebar-body');
var button = document.querySelector('#Nhamburger-button');
var buttonclose = document.querySelector('#Nhamburger-button-close');
var overlay = document.querySelector('#Nhamburger-overlay');
var burger = document.querySelector('#Nhamburger');
var activatedClass = 'Nhamburger-activated'

sidebarBody.innerHTML = content.innerHTML


button.addEventListener('click', function (e) {
  e.preventDefault();

  burger.classList.add(activatedClass);
  sidebarBody.classList.remove('none');
});

buttonclose.addEventListener('click', function (e) {
  e.preventDefault();

  // this.parentNode.classList.remove(activatedClass);
  burger.classList.remove(activatedClass);
  sidebarBody.classList.add('none');
});

// Nav Bar Background

window.onscroll = () => {

  if (window.scrollY >= 860) {
    content.classList.add('navBackground');
  } else {
    content.classList.remove('navBackground');
  }
}

// Loader

window.onload = () => {
  setTimeout(() => {
    document.getElementById('Nparents').classList.add('none')
  }, 2500);
}