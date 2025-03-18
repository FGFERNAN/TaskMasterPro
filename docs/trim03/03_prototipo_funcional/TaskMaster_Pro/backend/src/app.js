const express = require('express');
const cors = require('cors');
const session = require('express-session');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const DBConnection = require('./config/dbConnection');
const userRoutes = require("./routes/user_routes");
const roleRoutes = require("./routes/role_routes");
const moduleRoutes = require("./routes/module_routes");
const loginRoutes = require("./routes/login_routes");
const logoutRoutes = require('./routes/logout_routes');
const editProfile = require('./routes/editProfile_routes');

const db = new DBConnection();


//Declared
const app = express();
const port = 4000;

//Middleware
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));
app.use(express.json());

app.use(session({
  secret: 'holaMundo1234',
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
      secure: false,       
      httpOnly: true,     
      maxAge: 3600000    
  }
}));

//Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info:{
      title: "API de Gestión de Proyectos y Tareas",
      version: "1.0.0",
      description: "Documentación de la API con Swagger",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Routes
/* Estas líneas de código configuran rutas para diferentes partes de la aplicación. Cada instrucción 
`app.use` asocia una ruta específica con un conjunto correspondiente de rutas definidas en archivos separados.*/
app.use('/api-v1/user',userRoutes);
app.use('/api-v1/role',roleRoutes);
app.use('/api-v1/module',moduleRoutes);
app.use('/api-v1/login',loginRoutes);
app.use('/api-v1/logout', logoutRoutes);
app.use('/api-v1/editProfile', editProfile);
app.use('/api-v1/session', loginRoutes);

/* El fragmento de código `app.listen(port,()=>{ console.log(`Listener Server http://localhost:`); });`
configura un servidor para que escuche en un puerto específico (en este caso, el puerto 4000). Cuando el
servidor se inicia correctamente y escucha en el puerto especificado, registrará un mensaje en la
consola indicando que el servidor está en ejecución y es accesible en `http://localhost:4000`. */
const server = app.listen(port,()=>{
  console.log(`Listener Server http://localhost:${port}`);
  console.log(`Documentación disponible en http://localhost:${port}/api-docs`);
});

// Cierra el pool al detener el servidor
process.on('SIGINT', async () => {
  console.log('Closing server...');
  await db.close(); 
  server.close(() => {
      console.log('Server stopped');
      process.exit(0);
  });
});

