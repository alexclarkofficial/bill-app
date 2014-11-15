import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['spec-cart', 'cart'],

  total: function() {
    var lineItems = this.get('lineItems');
    return lineItems.reduce(function (total, lineItem) {
      return total + lineItem.get('extendedPrice');
    }, 0);
  }.property('lineItems.@each.extendedPrice'),
});
