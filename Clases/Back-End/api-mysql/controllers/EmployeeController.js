const Employee = require('../models/EmployeeModel')

exports.findAll = (req, res) => {
    Employee.getAll((err, data) => {
        if(err) res.status(500).send({
            message: err.message || 'The list is not available!'
        })
        else res.send( data );
    })
}