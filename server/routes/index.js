const router = require("express").Router();

const auth = require("./auth");
const api = require("./api");
const cards = require("./cards");

router.use("/auth", auth);
router.use("/api", api);
router.use("/cards", cards);

module.exports = router;
