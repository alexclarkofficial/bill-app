import Ember from "ember";

export default Ember.ObjectController.extend({

  actions: {
    split: function(lineItem) {
      var cartID = this.get("cart_id");
      this.set("qty", this.get("qty")-1);
    }
  }
});
