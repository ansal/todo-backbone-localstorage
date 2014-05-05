var app = app || {};

(function(){
  'use strict';

  // TODO Model

  app.Todo = Backbone.Model.extend({

    // default attributes for todo

    defaults: {
      title: 'Untitled Todo',
      completed: false
    }

  });
})();