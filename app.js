// global backbone app
var app = app || {};

// enter key code for createonenter method
var ENTER_KEY = 13;

$(function(){

  // create the main view
  app.appView = new app.AppView();

  // fetch the models
  app.Todos.fetch({ reset : true });
});