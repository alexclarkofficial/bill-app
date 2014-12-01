import Ember from 'ember';

export function moneyDisplay(value) {
  var amount = value === 0 ? '000' : value.toString(),
    cents = amount.slice(-2),
    dollars = amount.slice(0, -2);
  return '$' + dollars + '.' + cents;
}

export default Ember.Handlebars.makeBoundHelper(moneyDisplay);
