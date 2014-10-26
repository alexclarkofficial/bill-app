import Ember from 'ember';

export default Ember.ObjectController.extend({
  itemController: 'lineItem',
  classNameBindings: ['isHidden'],
  isHidden: 'is-shown',

  total: function() {
    var lineItems = this.get('lineItems');
    return lineItems.reduce(function (total, lineItem) {
      return total + lineItem.get('extendedPrice');
    }, 0);
  }.property('lineItems.@each.extendedPrice'),

  actions: {
    showDrop: function(cart) {
      alert(cart.get('name'))
    },

    closeCart: function() {
      this.set('isHidden', true);
    }
  }
});
