const LoanController = require("../controllers/Loan.controller");

module.exports = (app) => {
    //create
  app.post("/api/Loan", LoanController.createLoan);
    //read
  app.get("/api/Loan", LoanController.getAllLoans);
  app.get("/api/Loan/:id", LoanController.getOneLoan);
    //update
  app.put("/api/Loan/:id", LoanController.updateLoan);
    //delete
  app.delete("/api/Loan/:id", LoanController.deleteLoan);
};