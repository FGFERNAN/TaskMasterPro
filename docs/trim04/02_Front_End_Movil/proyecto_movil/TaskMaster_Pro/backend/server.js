const express = require('express');
const passport = require('passport');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

//** importar las rutas**//

const loginRoutes = require('./routes/loginRoutes');
const userRoutes = require('./routes/userRoutes');


const port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

//Configuración de Swagger
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Móvil TaskMaster Pro",
            version: "1.0.0",
            description: "Documentación de la API de Gestión de Proyectos y Tareas con Swagger",
        },
        servers: [
            {
                url: `http://192.168.80.15:${port}`,
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


require('./config/passport')(passport);
app.disable('x-powered-by');// Disable the x-powered-by header in the response

app.set('port', port);
//*Llamado de rutas//
loginRoutes(app);
userRoutes(app);

// Iniciando el servidor
// Direction ip V4 de la maquina consultar ipconfig
server.listen(3000, '192.168.80.15' || 'localhost',
    function () {
        console.log('Aplicacion de NodeJS ' + process.pid + ' ejecutando en ' +
            server.address().address + ' : ' + server.address().port
        );
        console.log(`Documentación disponible en http://192.168.80.15:${port}/api-docs`);
    });
/*Rutas*/
app.get('/', (req, res) => {
    res.send('Estas en la Ruta raiz de Backend');
});

app.get('/test', (req, res) => {
    res.send('Estas en la ruta test');
});
//Manejo de errores
//Error handler

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});
