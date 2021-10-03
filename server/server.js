const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const faker = require("faker");
const app = express();
const Storage = require("./storage");
const store = new Storage();
const db = new session.MemoryStore();
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: db,
    cookie: { maxAge: 24 * 68 * 60 * 1000 },
  })
);
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Accept", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
const createEmployee = () => {
  let data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      name: faker.name.firstName() + " " + faker.name.lastName(),
      avatar: faker.image.avatar(),
      accountName: faker.finance.accountName(),
      accountNumber: faker.finance.account(10),
      currencyCode: faker.finance.currencyCode(),
      id: faker.random.alphaNumeric(10),
      date: faker.date.past().toDateString(),
    });
  }
  return data;
};
app.get("/employee-data", async (req, res) => {
  var data = createEmployee();
  req.session.save();
  store.saveData(data);
  res.status(200).json({ msg: "SUCCESS", list: data });
});
app.post("/edit-data", async (req, res) => {
  if (req.body.id) {
    var list = await store.getData();
    var editData = list.findIndex((x) => x.id == req.body.id);
    if (editData > -1) {
      list[editData] = req.body;
      store.saveData(list);
      res.status(201).json({ msg: "SUCCESS", list: list });
    } else {
      res.status(501).json({ msg: "ERROR", list: [] });
    }
  }
});
const PORT = process.env.PORT || 9090;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
