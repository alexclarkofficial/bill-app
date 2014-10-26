import Ember from "ember";
import DS from "ember-data";

export default DS.Model.extend({
  menuItem: DS.belongsTo("menu-item", {asnyc: true }),
  qty: DS.attr("number"),
  cart: DS.belongsTo("cart", { asnyc: true }),

  price: Ember.computed.alias("menuItem.price"),
  name: Ember.computed.alias("menuItem.name"),

  extendedPrice: function() {
    return this.get("qty") * this.get("price");
  }.property("qty", "price")
});
