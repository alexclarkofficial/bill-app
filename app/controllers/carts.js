import Ember from "ember";

export default Ember.ArrayController.extend({
  itemController: "cart",

  actions: {
    openCart: function() {
      var newCart = { name: "Guest", visible: "" };
      this.store.createRecord("cart", newCart);
    }
  }
});
