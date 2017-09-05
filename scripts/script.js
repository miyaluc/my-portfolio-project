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
};

// var ipsumRaw = $.ajax({
//   'url': "data\projects.json",
//   'success': function(json) {
//     console.log(json);
//     console.log(json.responseText);
//     return(json.responseText)
//   }
// })
PastProjects.fetchAll = function() {
  if (localStorage.rawData) {
    PastProjects.loadAll(JSON.parse(localStorage.rawData));
    articleView.initIndexPage();
  } else {
    $.getJSON('data\projects.json')
      .then(function(rawData) {
        Article.loadAll(rawData);
        localStorage.rawData = JSON.stringify(rawData);
        articleView.initIndexPage();
      }, function(err) {
        console.error(err);
      })
  }
}

PastProjects.loadData = function(rawData) {
  rawData.forEach(function(project) {
    portfolio.push(new PastProjects(project));
  });
  portfolio.forEach(function(project) {
    $('.entry').append(project.displayProject());
  });
}
