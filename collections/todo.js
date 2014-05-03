var app = app || {};

(function(){
  
  // Collections for storing todos
  var TodoList = Backbone.Collection.extend({

    // link to the model
    model: app.Todo,

    // save all the todos to localstorage
    localStorage: new Backbone.LocalStorage('todos-backbone'),

    completed : function() {
      return this.filter(function(todo){
        return todo.get('completed');
      });
    },

    remaining: function() {
      return this.without.apply(this, this.completed());
    }

  });

  app.Todos = new TodoList();

})();