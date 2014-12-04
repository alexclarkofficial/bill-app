import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('cart');
  },

  actions: {
    closeCart: function() {
      this.transitionTo('check');
    }
  }
});
