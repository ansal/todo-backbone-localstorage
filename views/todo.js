// global backbone app
var app = app || {};

(function(){
  'use strict';

  app.TodoView = Backbone.View.extend({

    tagName: 'li',

    template: _.template($('#todoTemplate').html()),

    events: {
      'click .completeCheckbox' : 'toggleState',
      'click .todoLink' : 'showEditor',
      'click .todoEditButton' : 'showEditor',
      'click .todoUpdateButton': 'updateTodo',
      'click .todoDeleteButton': 'deleteTodo'
    },

    initialize: function() {

      // cache dom elements
      this.$editor = this.$('.editor');

      // listen to events
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);

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
    },

    showEditor: function(e) {

      // prevent the default behaviour of browser -
      // of going into the anchor tag
      e.preventDefault();
      this.$el.find('.todoEditor').toggle();

    },

    updateTodo: function(e) {

      var updatedTitle = this.$el.find('.updatedTitle').val();
      if(!updatedTitle) {
        alert('Please enter a new title');
        return;
      }

      this.model.save({
        title: updatedTitle
      });

    },

    deleteTodo: function() {
      this.model.destroy();
    }

  });

})();