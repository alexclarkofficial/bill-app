import Ember from 'ember';

export default Ember.Component.extend({

  total: function() {
    var lineItems = this.get('lineItems');
    return lineItems.reduce(function (total, lineItem) {
      return total + lineItem.get('extendedPrice');
    }, 0);
  }.property('lineItems.@each.extendedPrice'),

  didInsertElement: function() {
    this.$('').droppable({
      accept: '.row'
    });
  },

  actions: {
    payNow: function() {
      this.sendAction('action', this.get('cartObject'));
    }
  }
});
