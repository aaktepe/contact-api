const { condition } = require("sequelize");
const db = require("../models");
const Contact = db.Contact;
const Op = db.Sequelize.Op;

// Create and Save a new Contact
exports.create = (req, res) => {
   // Validate request
   if (!req.body.firstName || !req.body.lastName || !req.body.company || !req.body.phone) {
    res.status(400).send({
      message: "Contact need to have all attributes!"
    });
    return;
  };

  var contact = Object.assign({}, req.body, { "uid" : req.userId });
  // Save contact in the database
  Contact.create(contact)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Contact."
        });
    });
};

// Retrieve all Contacts where the conditions are matched from the database.
exports.findAll = (req, res) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    const company = req.query.company;
    const phone = req.query.phone;
    if (firstName || lastName) {
      var first_name_condition = firstName ?  { firstName: { [Op.like]: `%${firstName}%`} }  : null;
      var last_name_condition = lastName ?  { lastName: { [Op.like]: `%${lastName}%` } } : null;
      var condition = Object.assign({}, first_name_condition, last_name_condition);
    } else if (company) {
      var condition = company ?  { company: { [Op.like]: `%${company}%`} }  : null;
    } else if (phone) {
      var condition = phone ?  { phone: { [Op.like]: `%${phone}%`} }  : null;
    } else {
      var condition = {};
    }
    var condition = Object.assign({}, condition, { "uid": req.userId });
    Contact.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving contacts."
        });
      });
};

// Find a single Contact with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Contact.findByPk(id)
      .then(data => {
        if (data.uid != req.userId) {
          res.status(401).send({
            message: `Unauthorized.`
          });
        } else if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Contact with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Contact with id=" + id
        });
      });
};

// Update a Contact by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Contact.update(req.body, {
      where: { id: id, uid: req.userId }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Contact was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Contact with id=${id}. Maybe Contact was not yours!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Contact with id=" + id
        });
      });
  };

// Delete a Contact with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Contact.destroy({
      where: { id: id, uid: req.userId }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Contact was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Contact with id=${id}. Maybe Contact was not yours!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Contact with id=" + id
        });
      });
  };

// Delete all Contacts from the database.
exports.deleteAll = (req, res) => {
    Contact.destroy({
      where: { uid: req.userId },
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Contacts were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all contacts."
        });
      });
  };