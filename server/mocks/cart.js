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
    name: 'Check',
    isHidden: false,
    lineItem_ids: [1, 2, 3]
  }
],

LINEITEMS = [
  {
    id: 1,
    item: 1,
    qty: 1,
    cart_id: 1
  },
  {
    id: 2,
    item: 2,
    qty: 3,
    cart_id: 1
  },
  {
    id: 3,
    item: 3,
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
]
