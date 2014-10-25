import startApp from "../helpers/start-app";
import Ember from "ember";

var App, server;

module("Integration - Carts Page", {
  setup: function() {
    App = startApp();
    var CARTS = [
      {
        id: 1,
        name: "Bill",
        lineItem_ids: [1,2]
      },
      {
        id: 2,
        name: "Guest1",
        lineItem_ids: [3]
      },
      {
        id: 3,
        name: "Guest2",
        lineItem_ids: []
      }
    ];

    var LINEITEMS = [
      {
        id: 1,
        name: "Steak",
        price: 19.99,
        qty: 1,
        bill_id: 1,
        cart_id: 1
      },
      {
        id: 2,
        name: "Lobster",
        price: 29.99,
        qty: 3,
        bill_id: 1,
        cart_id: 1
      },
      {
        id: 3,
        name: "Beers",
        price: 4.99,
        qty: 4,
        bill_id: 2,
        cart_id: 2
      }
    ];

    server = new Pretender(function(){
      this.get('/api/carts', function(request){
        var all =  JSON.stringify({ "carts": CARTS, "line_items": LINEITEMS });
        return [200, {"Content-Type": "application/json"}, all];
      });
    });
  },

  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

test('Should list all carts', function() {
  visit("/carts").then(function() {
    equal(find('td').length, 23);
    equal(find('h1').length, 1);
  });
});
