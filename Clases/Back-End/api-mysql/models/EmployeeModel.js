const sql = require('./connection');

//Crear prototype de mi tabla employees
const Employee = (employee) => {
    this.firstName = employee.firstName,
    this.lastName = employee.lastName,
    this.job = employee.job
}

//GET

Employee.getAll = result => {
    //Select
    sql.query('SELECT * FROM employees', (err, res) => {
        if(err) {
            console.log('error', err);
            result(null, err);
            return
        }
        console.log('employees:',res);
        result(null, res)
    })
}

//POST

Employee.create = (newEmp, result) => {
    sql.query('INSERT INTO employees SET ?',newEmp, (err, res) => {
        if(err) {
            console.log('error', err);
            result(null, err);
            return
        }
        console.log('employee was created with succes!!', {...newEmp});
        result(null, {...newEmp})
    })
}

//PUT

Employee.updateById = (id,employee,result) => {
    sql.query(
        'UPDATE employees SET first_name = ?, last_name = ?, job = ? WHERE id = ?',
        [employee.firstName, employee.lastName, employee.job, id],
        (err, res) => {
            if(err) {
                console.log('error', err);
                result(null, err);
                return
            }
            if(res.affectedRows == 0) {
                result({message: 'not found'}, null);
                return
            }
            console.log('employee record was updated with sucess!', {...employee});
            result(null, {...employee})
        }
    )
}

module.exports = Employee