const express = require('express');
const app = express();
const moviesApi = require('./routes/movies');
const usuariosApi = require('./routes/usuarios');
const { config } = require('./config/index');
const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler')

//Middlewares Error
app.use(express.json());

//Routes
moviesApi(app);
usuariosApi(app);
//Catch 404
app.use(notFoundHandler);

app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);
app.listen((config.port), (req, res) => {
    console.log(`Servidor corriendo en el puerto ${config.port}`)
})