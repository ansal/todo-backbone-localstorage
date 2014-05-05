// global backbone app
var app = app || {};

(function(){
  'use strict';

  app.TodoView = Backbone.View.extend({

    tagName: 'li',

    template: _.template($('#todoTemplate').html()),

    events: {
      'click .completeCheckbox' : 'toggleState'
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    toggleState: function(e) {
      this.model.save({
        completed: !(this.model.get('completed'))
      });
      this.render();
    }

  });

})();