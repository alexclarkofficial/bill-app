import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('check', { path: '/' }, function(){
    this.route('newCustomer', { path: '/customer/new' });
    this.route('customer', { path: '/customer/:cart_id' });
  });
});

export default Router;
