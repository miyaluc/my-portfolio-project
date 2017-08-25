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
