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
      this.$newTodoText = this.$('#newTodoText');
    },

    createOnEnter: function(e) {
      if(e.which === ENTER_KEY && this.$newTodoText.val().trim()) {
        app.Todos.create({
          title: this.$newTodoText.val().trim(),
        });
        this.$newTodoText.val('');
      }
    }

  });

})();