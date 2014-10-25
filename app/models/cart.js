import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr("string"),
  isHidden: DS.attr("boolean"),
  lineItems: DS.hasMany("lineItem", { async: true })
});
