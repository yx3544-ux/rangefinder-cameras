// JavaScript for camera web page navigation

let menu_icon = document.querySelector('svg.menu')
let navigation = document.querySelector('nav')
let header =  document.querySelector('header')

function toggleNav() {
  // console.log('Toggle the nav bar!');
  // add or remove the "expand" class
  navigation.classList.toggle('expand');
  header.classList.toggle('expand');
}

menu_icon.addEventListener('click', toggleNav);