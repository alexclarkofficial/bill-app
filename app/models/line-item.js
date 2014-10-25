import Ember from "ember";
import DS from "ember-data";

export default DS.Model.extend({
  item: DS.belongsTo("menu-item", {asnyc: true }),
  qty: DS.attr("number"),
  cart: DS.belongsTo("cart", { asnyc: true })
});
