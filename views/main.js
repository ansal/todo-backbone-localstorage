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
      this.$todoList = this.$('#todoList');
      this.$remainingTodosCount = this.$('#remainingTodosCount');
      this.$completedTodosCount = this.$('#completedTodosCount');

      // listen to events
      this.listenTo(app.Todos, 'add', this.addOne);
      this.listenTo(app.Todos, 'reset', this.addAll);
      this.listenTo(app.Todos, 'change', this.render);

    },

    render: function() {
      this.showTodoCount();
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
      this.$todoList.append(view.render().el);
    },

    addAll: function() {
      this.$todoList.html('');
      app.Todos.each(this.addOne, this);

      // show todo counts
      this.showTodoCount();
    },

    showTodoCount: function() {
      var completed = app.Todos.completed().length;
      var remaining = app.Todos.remaining().length;
      this.$remainingTodosCount.text(remaining);
      this.$completedTodosCount.text(completed);
    }

  });

})();