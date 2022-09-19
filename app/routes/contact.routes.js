const { authJwt } = require("../middleware");
module.exports = app => {
    const contact = require("../controllers/contact.controller.js");

    var router = require("express").Router();
  
    // Create a new Contact
    router.post("/", [authJwt.verifyToken], contact.create);
  
    // Retrieve all Contacts also retrieve all Contacts where conditions are matched
    router.get("/", [authJwt.verifyToken], contact.findAll);
  
    // Retrieve a single Contact with id
    router.get("/:id", [authJwt.verifyToken], contact.findOne);
  
    // Update a Contact with id
    router.put("/:id", [authJwt.verifyToken], contact.update);
  
    // Delete a Contact with id
    router.delete("/:id", [authJwt.verifyToken], contact.delete);
  
    app.use('/api/contacts', router);
};