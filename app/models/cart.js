import DS from 'ember-data';

export default DS.Model.extend({
  isCheck: DS.attr('boolean'),
  isOpen: DS.attr('boolean'),
  lineItems: DS.hasMany('lineItem', { async: true })
});
