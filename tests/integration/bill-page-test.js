import startApp from "../helpers/start-app";
import Ember from "ember";

var App, server;

module("Integration - Bill Page", {
  setup: function() {
    App = startApp();

    var LINEITEMS = [
      {
        id: 1,
        name: "Steak",
        price: 19.99,
        qty: 1,
        cart_id: 1
      },
      {
        id: 2,
        name: "Lobster",
        price: 29.99,
        qty: 3,
        cart_id: 2
      },
      {
        id: 3,
        name: "Beer",
        price: 4.99,
        qty: 4,
        cart_id: 3
      }
    ];

    server = new Pretender(function(){
      this.get('/api/line_items', function(request){
        var all =  JSON.stringify({ "line-item": LINEITEMS });
        return [200, {"Content-Type": "application/json"}, all];
      });
    });
  },

  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

test('Should list all lineItems', function() {
  visit("/bill").then(function() {
    equal(find('select').length, 3);
    equal(find('h1').length, 1);
  });
});
