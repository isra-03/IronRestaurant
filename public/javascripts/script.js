document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

//Initialization requiered for Materialize
$(document).ready(function(){
  $('.parallax').parallax();
  $('.sidenav').sidenav();
  $('select').formSelect();
});