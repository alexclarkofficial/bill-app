import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    split: function() {
      var lineItemID = this.get("content");
      this.sendAction('split', lineItemID);
    }
  }
});
