const Loan = require("../models/loan.model");

//Creating a new Loan
module.exports.createLoan = (req, res) => {
  Loan.create(req.body)
    .then((newLoan) => {
      res.json({ newLoan });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Getting all Loans
module.exports.getAllLoans = (req, res) => {
  Loan.find()
    .then((allLoans) => {
      res.json(allLoans);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Getting one Loan
module.exports.getOneLoan = (req, res) => {
  Loan.findOne({ _id: req.params.id })
    .then((queriedLoan) => {
      res.json(queriedLoan);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Updating an Loan
module.exports.updateLoan = (req, res) => {
  Loan.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedLoan) => {
      res.json({ updatedLoan });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Deleting an Loan
module.exports.deleteLoan = (req, res) => {
  Loan.deleteOne({ _id: req.params.id })
    .then((deletedResponse) => {
      res.json({ deletedResponse });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}