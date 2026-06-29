import dotenv from 'dotenv'; // O el import de dotenvx que estés usando
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Cargamos las variables de entorno PRIMERO
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') }); 

// 2. Importamos la base de datos DINÁMICAMENTE (después de que process.env ya tiene los datos)
const { default: sequelize } = await import('../config/database.js');
const { default: Videojuego } = await import('../models/videojuegos.js');

const seedDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');

        await Videojuego.sync({ force: true });
        console.log('Tabla de videojuegos sincronizada.');

        const juegosDePrueba = [
            {
                titulo: 'Mu Online',
                precio: 15.50,
                plataforma: 'PC',
                stock: 100,
                genero: 'MMORPG',
                descripcion: 'Un clásico MMORPG de fantasía en el continente de MU. Leveo intenso y farmeo de joyas.'
            },
            {
                titulo: 'Club Marian',
                precio: 0.00,
                plataforma: 'Web',
                stock: 9999,
                genero: 'Social MMO',
                descripcion: 'Juego social nostálgico de navegador. Conducir autos, explorar y chatear con otros jugadores.'
            },
            {
                titulo: 'Elden Ring',
                precio: 59.99,
                plataforma: 'PS5',
                stock: 45,
                genero: 'RPG',
                descripcion: 'Juego de rol y acción de mundo abierto desarrollado por FromSoftware.'
            },
            {
                titulo: 'Stardew Valley',
                precio: 14.99,
                plataforma: 'PC',
                stock: 120,
                genero: 'Simulación',
                descripcion: null 
            },
            {
                titulo: 'Hollow Knight',
                precio: 15.00,
                plataforma: 'Switch',
                stock: 30,
                genero: 'Acción',
                descripcion: 'Aventura épica en 2D a través de un vasto reino en ruinas lleno de insectos y héroes.'
            }
        ];

        await Videojuego.bulkCreate(juegosDePrueba);
        console.log('¡Base de datos poblada exitosamente con datos de prueba!');

        process.exit(0);
    } catch (error) {
        console.error('Error al poblar la base de datos:', error);
        process.exit(1);
    }
};

seedDatabase();