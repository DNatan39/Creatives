var content = document.querySelector('#Nhamburger-content');
var sidebarBody = document.querySelector('#Nhamburger-sidebar-body');
var button = document.querySelector('#Nhamburger-button');
var buttonclose = document.querySelector('#Nhamburger-button-close');
var overlay = document.querySelector('#Nhamburger-overlay');
var activatedClass = 'Nhamburger-activated'

sidebarBody.innerHTML = content.innerHTML

button.addEventListener('click', function (e) {
    e.preventDefault();

    this.parentNode.classList.add(activatedClass);
    sidebarBody.classList.remove('none');
});

buttonclose.addEventListener('click', function (e) {
    e.preventDefault();

    // this.parentNode.classList.remove(activatedClass);
    document.getElementById('Nhamburger').classList.remove(activatedClass);
    sidebarBody.classList.add('none');
});