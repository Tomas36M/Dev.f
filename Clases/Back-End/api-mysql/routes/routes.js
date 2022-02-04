module.exports = app => {
    const employees = require('../controllers/EmployeeController')

    app.get('/employees', employees.findAll)
}