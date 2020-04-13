const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const db = require("./db/queries");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(cors());

app.get("/", (request, response) => {
  // response.json({ info: "Node.js, Express, and Postgres API" });
  response.send("Node.js, Express, and Postgres API");
});

app.get("/products", db.getProducts);
// app.get("/basket", db.getBasket);
app.post("/basket", db.addBasketToProducts);
app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:name", db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
