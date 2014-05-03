// global backbone app
var app = app || {};

(function(){
  'use strict';

  app.TodoView = Backbone.View.extend({

    tagName: 'li',

    template: _.template($('#todoTemplate').html()),

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }

  });

})();