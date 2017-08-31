'use strict';
var portfolio = [];

//here is my project constructor
function PastProjects(name, about, screenshot) {
  ///call it = new PastProject(name, about, screenshot)
  this.name = rawData.name;
  this.about = rawData.about;
  this.image = rawData.image;
}

//adding all past projects to the DOM
PastProjects.prototype.displayProject = function() {
  var $pastProjects = $('section.template').clone();
  $pastProjects.find('h2').text(this.name);
  $pastProjects.find('img').attr('src', this.image);
  $pastProjects.find('p.project-description').text(this.about);
  $pastProjects.removeClass('template');
  return $pastProjects;
}

rawData.sort(function(a,b) {
  return (new Date(b.created)) - (new Date(a.created));
});

rawData.forEach(function(project) {
  portfolio.push(new PastProjects(project));
});

portfolio.forEach(function(project){
  $('.projects').append(project.displayProject());
});

var headerActions = {};

//this is what I'll use to show my menu icon
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
    $('.hamburger-icon'.text('Show Menu').attr('class', 'show-menu');
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
