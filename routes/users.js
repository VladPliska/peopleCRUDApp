const express = require("express");
const router = express.Router();

module.exports = (db) => {
  const mainController = require("../controller/mainController")(db);

  router.get("/", mainController.index);
  router.put("/", mainController.store);
  router.get("/:id", mainController.show);
  router.patch("/:id", mainController.update);
  router.delete("/:id",mainController.destroy);

  return router;
};
