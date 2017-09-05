'use strict';

var headerActions = {};

// this is what I'll use to show my menu icon
headerActions.displayMenu = function() {
  $('#nav').on('click', '.show-menu', function(e) {
    e.preventDefault();
    $('ul').fadeIn();
    $('.hamburger-icon').text('Hide Menu').attr('class', 'hide-menu');
  });
}

//this is what I'll use to hide my menu icon
headerActions.hideMenu = function() {
  $('#nav').on('click', '.hide-menu', function(e) {
    e.preventDefault();
    $('ul').fadeOut();
  // $('.hamburger-icon').text('Show Menu').attr('class', 'show-menu');
  });
}

headerActions.displaySection = function() {
  $('#nav li').on('click', function(e) {
    e.preventDefault();
    var selected = $(this).attr('id');
    $('tab-content:not(.' + selected + ')').fadeOut(500);
    $('tab-content').is(':visible') ? $('.' + selected).delay(500).fadeIn(500) : $('.' + selected).fadeIn(500);
  });
}

//calling my header functions
$(document).ready(function(){
  headerActions.displayMenu();
  headerActions.hideMenu();
  headerActions.displaySection();
});



// articleView.initIndexPage = function() {
//   Article.all.forEach(function )
// }
