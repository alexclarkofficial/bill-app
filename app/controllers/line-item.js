import Ember from "ember";

export default Ember.ObjectController.extend({

  extendedPrice: function() {
    return this.get("itemID.price") * this.get("qty");
  }.property("itemID.price", "qty"),

  actions: {
    split: function(lineItem) {
      var cartID = this.get("cart_id");
      this.set("qty", this.get("qty")-1);
    }
  }
});
