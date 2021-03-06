module.exports = app => {

    const movies = require("../controllers/movie.controller.js");
    const router = require("express").Router();

    router.post("/newmovie", movies.create);
    router.get("/", movies.findAll);
    router.patch("/update/:id", movies.update);
    router.get("/:id", movies.findByPk);
    router.delete("/:id", movies.delete);

    //https://localhost:3000/api/movies/id


    app.use('/api/movies', router)
}