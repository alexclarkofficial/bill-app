module.exports = function(app) {
  var express = require('express');
  var cartRouter = express.Router();
  cartRouter.get('/',
    function(req, res) {
    res.send({
      carts: CARTS,
      line_items: LINEITEMS,
      menu_items: MENUITEMS
    });
  });
  app.use('/api/carts', cartRouter);
};

var CARTS = [
  {
    id: 1,
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
    price: 1999
  },
  {
    id: 2,
    name: "Lobster",
    price: 2999,
  },
  {
    id: 3,
    name: "Beers",
    price: 499,
  },
];
