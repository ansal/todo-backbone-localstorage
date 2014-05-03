// the global backbone app variable
var app = app || {};

(function(){
  'use strict';

  // the main view
  // handles events for adding todos, toggling todo state and clear completed
  // todos
  app.AppView = Backbone.View.extend({
    el : '#app',

    events : {
      'keyup #newTodoText': 'createOnEnter'
    },

    initialize: function() {

      // cache dom elements

      this.$newTodoText = this.$('#newTodoText');
      this.$remainingTodos = this.$('#remainingTodos');
      this.$completedTodos = this.$('#completedTodos');

      // listen to events
      this.listenTo(app.Todos, 'add', this.addOne);
      this.listenTo(app.Todos, 'reset', this.addAll);

    },

    render: function() {
      var completed = app.Todos.completed().length;
      var remaining = app.Todos.remaining().length;
    },

    createOnEnter: function(e) {
      if(e.which === ENTER_KEY && this.$newTodoText.val().trim()) {
        app.Todos.create({
          title: this.$newTodoText.val().trim(),
        });
        this.$newTodoText.val('');
      }
    },

    addOne: function(todo) {
      var view = new app.TodoView({model: todo});
      if(todo.completed) {
        this.$completedTodos.append(view.render().el);
      } else {
        this.$remainingTodos.append(view.render().el);
      }
    },

    addAll: function() {
      this.$remainingTodos.html('');
      this.$completedTodos.html('');
      app.Todos.each(this.addOne, this);
    }

  });

})();