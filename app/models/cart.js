import DS from 'ember-data';

export default DS.Model.extend({
  lineItems: DS.hasMany('lineItem', { async: true }),

  total: function() {
    return this.get('lineItems').reduce(function(total, item) {
      return total + item.get('extendedPrice');
    }, 0);
  }.property('lineItems.@each.extendedPrice')
});
