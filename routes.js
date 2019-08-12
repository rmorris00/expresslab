const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

const cart = [{

        id: 1,
        product: "apple",
        price: 1,
        quantity: 1


    },
    {
        id: 2,
        product: "banana",
        price: 1,
        quantity: 1

    },

    {
        id: 3,
        product: "pear",
        price: 1,
        quantity: 1

    }

];

let id = cart.map(a => a.id);

router.use(bodyParser.json());



router.get("/cart-items", (req, res) => {
    res.json(cart);
    res.end();
});

router.post("/cart-items", (req, res) => {
    console.log(req.body);
    res.json({
        user: req.body.user
    });

    res.end();
});

router.put("/cart-items/:id", (req, res) => {
    res.send(id);
    console.log(req.body);
    res.send({
        user: req.body.user
    });
    console.log(id);

    res.end();

});

router.delete("/cart-items/:id", (req, res) => {
    res.send(id);
    console.log(id);

    res.end();

});




module.exports = router;