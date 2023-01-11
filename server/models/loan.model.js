const mongoose = require("mongoose");

const LoanSchema = {
  name: {
    type: String,
    required: [true, "Loanacter Name is required"],
    minLength: [3, "Loanacter's name must have at least 3 Loanacters"],
  },
  classs:{
    type:String,
    enum:{
        values:[
            'Barbarian',
            'Bard',
            'Cleric',
            'Druid',
            'Fighter',
            'Monk',
            'Paladin',
            'Ranger',
            'Rogue',
            'Sorcerer',
            'Warlock',
            'Wizard',
        ],
        message:'{VALUE} is not supported'
        
    },
    required:[true,"A class is required"]
},

profPic:{
  type:String,
  required:[true,"Profile Picture is required"]
},


desc: {
  type: String,
  required: [true, "Loanacter Backstory is required"],
  minLength: [3, "Loanacter Backstory must have at least 3 Loanacters"],
},


};

module.exports = mongoose.model("Loan", LoanSchema);