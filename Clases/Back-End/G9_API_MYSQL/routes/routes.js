module.exports = app => {
    const employees = require( "../controllers/EmployeeController" );

    //url get
    app.get( "/api/employees", employees.findAll );
    //url get by id
    app.get( "/api/employees/:id", employees.findById );
    //url post
    app.post( "/api/newemployee", employees.create );
    //url put
    app.put( "/api/updatemployee/:id", employees.updateById );
    //url delete
    app.delete('/api/remove/:id', employees.delete)
}