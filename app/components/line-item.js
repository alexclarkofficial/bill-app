import Ember from 'ember';

export default Ember.Component.extend({
  extendedPrice: function() {
    return this.get("lineItem.qty") * this.get("lineItem.item.price");
  }.property("lineItem.qty", "lineItem.item.price")
});
