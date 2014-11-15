import startApp from "../helpers/start-app";
import Ember from "ember";

var App, server;

module("Integration - Carts Page", {
  setup: function() {
    App = startApp();
    var CARTS = [

      {
        id: 1,
        name: 'Check',
        isOpen: true,
        lineItem_ids: [1, 2, 3]
      }
    ],

    LINEITEMS = [
      {
        id: 1,
        menuItem: 1,
        qty: 1,
        cart_id: 1
      },
      {
        id: 2,
        menuItem: 2,
        qty: 3,
        cart_id: 1
      },
      {
        id: 3,
        menuItem: 3,
        qty: 4,
        cart_id: 1
      }
    ],

    MENUITEMS = [
      {
        id: 1,
        name: "Steak",
        price: 19.99
      },
      {
        id: 2,
        name: "Lobster",
        price: 29.99,
      },
      {
        id: 3,
        name: "Beers",
        price: 4.99,
      },
    ];

    server = new Pretender(function(){
      this.get('/api/carts', function(request){
        var all =  JSON.stringify({ carts: CARTS, line_items: LINEITEMS, menu_items: MENUITEMS });
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
  visit("/").then(function() {
    equal(find('.cart').length, 1);
    equal(find('h2').length, 1);
  });
});
