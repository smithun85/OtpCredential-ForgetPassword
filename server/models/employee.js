const mongoose = require('mongoose');
const EmployeeSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },

    admin:{
        type:mongoose.Schema.Types.ObjectId;
        ref:"admin"
    },

    jobRoll:{
        type:String,
        require:true
    },

    salary:{
        type:Number,
        require:true
    },

    contact:{
        type:Number,
        require:true
    }
});

const employee = mongoose.model("employeeData", EmployeeSchema);

module.export = employee