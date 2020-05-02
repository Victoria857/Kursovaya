const Cards = require("../../models/cards");
const router = require("express").Router();

router.get("/getCards", async (req, res) => {
  return res.status(200).send("getting existing cards");
});
router.post("/createCard", async (req, res) => {
  const { cardNumber, cardCvv, cardOwner, cardCash } = req.body;

  return res.status(200).send("create");
});

module.exports = router;
