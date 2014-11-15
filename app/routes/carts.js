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
    }
  }
});
