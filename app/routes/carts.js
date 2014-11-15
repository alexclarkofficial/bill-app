import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return this.store.find('cart');
  },

  actions: {
    addCart: function() {
      var newCart = { name: 'Guest', visible: '' };
      newCart = this.store.createRecord('cart', newCart);
      newCart.save();
      this.set('cart', '');
    },

    moveItem: function(lineItemID, cart) {
      var self = this;
      var menuItem;

      this.store.find('lineItem', lineItemID).then(function(lineItem) {
        menuItem = lineItem.get('menuItem');

        lineItem.decrementProperty('qty');

        var movedItem = self.store.createRecord('lineItem', {
          qty: 1,
          menuItem: menuItem,
          cart: cart
        });
        movedItem.save()
      });
    }
  }
});
