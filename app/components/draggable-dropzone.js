import Ember from 'ember';

export default Ember.Component.extend({
  cart: '',

  didInsertElement: function() {
    var self = this;
    this.$().droppable({
      drop: function(event, ui) {
        var lineItemID = ui.draggable.data('lineItemID');
        self.sendAction('moveItem', lineItemID, self.cart)
      },
    });
  },
});
