import express, {urlencoded, json} from "express";
import indexRoutes from './routes/index'
import taskRoutes from './routes/tasks'

const app = express();

// setings
app.set('port', 3000);

//Middleware
app.use(urlencoded({extended: false}));
app.use(json());

//Routes
// app.use(indexRoutes);
app.use('/tasks', taskRoutes)

export default app;