'use strict';
var portfolio = [];

function PastProjects(name, about, screenshot) {
  ///call it = new PastProject(name, about, screenshot)
  this.name = name;
  this.about = about;
  this.screenShot = screenshot;
}

var youDontKnowJack = new PastProjects('You Don\t Know Jack', 'A Game that Tests Your Knowledge of Everyday Trivia', '');
var busMall = new PastProjects('Bus Mall', 'Your Online Bus Retailer', '');
var chocolatePizza = new PastProjects('Chocolate Pizza', 'A Chocolate Pizza Recipe', '');
