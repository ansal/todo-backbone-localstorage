var app = app || {};

(function(){
  'use strict';

  // TODO Model

  app.Todo = Backbone.Model.extend({
    // default attributes for todo
    defaults: {
      title: 'Untitled Todo',
      completed: false
    },
    // inverts state of a todo
    toggle: function() {
      this.save({
        completed: !this.get('completed')
      });
    }
  });
})();