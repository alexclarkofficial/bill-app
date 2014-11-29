import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['draggable'],

  didInsertElement: function() {
    this.$().draggable({
      revert: 'invalid',
      scroll: true,
      helper: 'clone',
      start: function(event, ui) {
        $('.ui-draggable-dragging').find('.quantity').text(1);
      },
    }).data('lineItemID', this.lineItemID);
  }
});
