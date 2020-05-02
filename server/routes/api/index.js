const router = require("express").Router();

const db = require("../../db/queries");

router.get("/products", db.getProducts);

router.get("/basket", db.getBasket);
router.post("/basket", db.addProductToBasket);
router.delete("/basket/:id", db.removeFromBasketById);

router.get("/users", db.getUsers);
router.get("/users/:id", db.getUserById);
router.post("/users", db.createUser);
router.put("/users/:id", db.updateUser);
router.delete("/users/:name", db.deleteUser);

module.exports = router;
