import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement: function() {
    this.$('.cart').droppable({
      accept: '.row'

    });
  },

  // dragLeave: function(event) {
  //   event.preventDefault();
  //   this.set('dragClass', 'deactivated');
  // },

  // dragOver: function(event) {
  //   event.preventDefault();
  //   this.set('dragClass', 'activated');
  // },

  // drop: function(event) {
  //   this.set('dragClass', 'deactivated');
  //   var data = event.dataTransfer.getData('text/data');
  //   this.sendAction('dropped', data);
  // }
});
