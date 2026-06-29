// app.js configura el servidor Express y la conexión a la base de datos.
import express from "express";
import cors from "cors";
import routes from './routes/index.js';
import sequelize from './config/database.js';

// Creamos la aplicación Express.
const app = express();

// cors() permite que el frontend (que corre en otro puerto) se comunique con el backend.
app.use(cors());

// express.json() permite leer el cuerpo de las peticiones en formato JSON.
app.use(express.json());

// Asociamos todas las rutas al path raíz '/'.
// Las rutas internas definirán sus propios sub-paths, por ejemplo /productos, /usuarios.
app.use('/', routes);

// El puerto se lee de una variable de entorno o, si no existe, usamos 3000.
const PUERTO = process.env.PORT || 3000;

// Función que inicia el servidor una vez verificada la conexión con la base de datos.
const iniciarServidor = async () => {
    try {
        // sequelize.authenticate() solo verifica que se puede conectar a la base de datos.
        // Realiza migraciones y modifica las tablas. Para que no ocurra comentar el sync
        await sequelize.sync( { alter: true } );
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');

        // app.listen() pone al servidor a escuchar peticiones en el puerto indicado.
        app.listen(PUERTO, () => {
            console.log('Servidor iniciado correctamente en el puerto:', PUERTO);
        });
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
};

iniciarServidor();
