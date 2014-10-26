import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['draggable-item', 'line'],
  attributeBindings: ['draggable'],
  draggable: 'true',

  dragStart: function(event) {
    event.dataTransfer.setData('text/data', this.get('cartID'));
  }
});
