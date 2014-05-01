var app = app || {};

(function(){
  
  // Collections for storing todos
  var TodoList = Backbone.Collection.extend({

    // link to the model
    model: app.Todo,

    // save all the todos to localstorage
    localStorage: new Backbone.LocalStorage('todos-backbone'),

  });

  app.Todos = new TodoList();

})();