import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['draggable'],

  didInsertElement: function() {
    this.$().draggable({
      revert: 'invalid',
      scroll: true,
      helper: 'clone'
    }).data('lineItemID', this.lineItemID);
  }
});
