import Ember from "ember";

export default Ember.ObjectController.extend({
  itemController: 'lineItem',
  classNameBindings: ["isHidden"],
  isHidden: "is-shown",

  total: function() {
    var lineItems = this.get("lineItems");
    return lineItems.reduce(function (total, lineItem) {
      return total + lineItem.get("extendedPrice");
    }, 0);
  }.property("lineItems.@each.extendedPrice"),

  actions: {
    showDrop: function(lineItemID) {
      var id = this.get("id");
      var lineItems = this.get("lineItems");
          var unit = this.store.createRecord("lineItem", {
            name: lineItem.get("name"),
            price: lineItem.get("price"),
            qty: 1,
            bill: lineItem.get("bill"),
            cart: id
            });
      this.store.find("lineItem", lineItemID).then(function(lineItem) {
        if(lineItem.get("qty") > 1 ) {
          lineItems.pushObject(unit)
        }
      });
    },

    closeCart: function() {
      this.set("isHidden", true);
    }
  }
});
