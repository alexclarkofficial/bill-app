import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return this.store.find('cart');
  },

  actions: {
    addCart: function() {
      var newCart = { isCheck: false, isCurrent: true };
      newCart = this.store.createRecord('cart', newCart);
      newCart.save();
    },

    closeCart: function(cartObject) {
      this.send('addCart');
      cartObject.set('isCurrent', false);
    },

    moveItem: function(lineItemID, cart) {
      var self = this,
        menuItem;

      this.store.find('lineItem', lineItemID).then(function(lineItem) {
        menuItem = lineItem.get('menuItem');

        cart.get('lineItems').then(function(lineItems) {
          var inCartItem = lineItems.filterBy('menuItem', menuItem);
          if (inCartItem.length) {
            inCartItem.objectAt(0).incrementProperty('qty');
          } else {
            self.store.createRecord('lineItem', {
              cart: cart,
              menuItem: menuItem,
              qty: 1
            });
          }
        });

        if (lineItem.get('qty') === 1) {
          lineItem.destroyRecord();
        } else  {
          lineItem.decrementProperty('qty');
        }
      });
    }
  }
});
