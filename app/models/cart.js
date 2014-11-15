import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  isOpen: DS.attr('boolean'),
  lineItems: DS.hasMany('lineItem', { async: true })
});
