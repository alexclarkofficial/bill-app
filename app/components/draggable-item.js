import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['draggable'],

  didInsertElement: function() {
    var self = this;
    this.$().draggable({
      revert: 'invalid',
      scroll: true,
      helper: 'clone',
      start: function() {
        self.$('.ui-draggable-dragging').find('.quantity').text(1);
      },
    }).data('lineItemID', this.lineItemID);
  }
});
