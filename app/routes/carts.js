import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return this.store.find('cart');
  },

  actions: {
    addCart: function() {
      var newCart = { isCheck: false, isCurrent: true };
      newCart = this.store.createRecord('cart', newCart);
      // newCart.save();
      // What does this next line do??
      // this.set('cart', '');
    },
    closeCart: function(cartObject) {
      this.send('addCart');
      cartObject.set('isCurrent', false);
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
