import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// json-server
import path from 'path';
import jsonServer from 'json-server';

// lowdb
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const __dirname = dirname(fileURLToPath(import.meta.url));

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
const adapter = new JSONFile(path.join(__dirname, "db.json"));
const db = new Low(adapter);

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.post("/products", (req, res) => {
  const { price, name, imageUrl } = req.body;

  if (
    !Number.isInteger(price) ||
    typeof name !== "string" ||
    typeof imageUrl !== "string"
  ) {
    res.sendStatus(400);
  } else {
    db.get("products").push({ id: Date.now(), price, name, imageUrl }).write();
    res.sendStatus(201);
  }
});

server.post("/carts", (req, res) => {
  const { product } = req.body;
  const { price, name, imageUrl } = product;

  if (
    !Number.isInteger(price) ||
    typeof name !== "string" ||
    typeof imageUrl !== "string"
  ) {
    res.sendStatus(400);
  } else {
    db.get("carts").push({ id: Date.now(), product }).write();
    res.sendStatus(201);
  }
});

server.post("/orders", (req, res) => {
  const { orderDetails } = req.body;

  for (const orderDetail of orderDetails) {
    const { quantity, price, name, imageUrl } = orderDetail;

    if (
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      !Number.isInteger(price) ||
      typeof name !== "string" ||
      typeof imageUrl !== "string"
    ) {
      res.sendStatus(400);
      return;
    }
  }

  db.get("orders")
    .push({
      id: Date.now(),
      orderDetails,
    })
    .write();
  res.sendStatus(201);
});

// default router
server.use(router);

server.listen(3003, () => {
  console.log("JSON Server is running");
});
