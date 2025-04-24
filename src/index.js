const express = require("express");
const { PORT } = require("./config/serverConfig");
const CityRepository = require("./repository/city-repository.js");

const setupAndStartServer = async () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
    const repo = new CityRepository();
    repo.createCity({ name: "Agra" });
  });
};

setupAndStartServer();
