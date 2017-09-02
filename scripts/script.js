'use strict';
var portfolio = [];

//here is my project constructor
function PastProjects(rawData) {
  ///call it = new PastProject(name, about, screenshot)
  this.name = rawData.name;
  this.about = rawData.about;
  this.image = rawData.image;
}

//adding all past projects to the DOM
PastProjects.prototype.toHtml = function() {
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  return template(this);
}

rawData.sort(function(a,b) {
  return (new Date(b.created)) - (new Date(a.created));
});

rawData.forEach(function(project) {
  portfolio.push(new PastProjects(project));
});

portfolio.map(function(project){
  // $('.projects').append(project.displayProject());
  $('#handlebars-entry').append(project.toHtml());
});

function handleNavBar() {
  $('li').on('click', function() {
    $('.articles').hide();
    var dataContent = $(this).attr('data-content');
    console.log(dataContent);
  });
};

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
