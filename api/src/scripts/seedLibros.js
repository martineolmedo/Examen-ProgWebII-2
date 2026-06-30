import dotenv from 'dotenv'; // O el import de dotenvx que estés usando
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Cargamos las variables de entorno PRIMERO
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') }); 

// 2. Importamos la base de datos DINÁMICAMENTE (después de que process.env ya tiene los datos)
const { default: sequelize } = await import('../config/database.js');
const { default: Libro } = await import('../models/libros.js');

const seedDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');

        await Libro.sync({ force: true });
        console.log('Tabla de libros sincronizada.');

        const librosDePrueba = [
            {
                titulo: 'Test 1',
                autor: 'John Doe',
                isbn: 'A345',
                paginas: 100,
                editorial: 'Random',
                sinopsis: 'Un clásico MMORPG de fantasía en el continente de MU. Leveo intenso y farmeo de joyas.'
            },
            {
                titulo: 'Test 2',
                autor: 'John Doe22',
                isbn: 'A3455',
                paginas: 200,
                editorial: 'Random',
                sinopsis: 'Un clásico MMORPG de fantasía en el continente de MU. Leveo intenso y farmeo de joyas.'
            },
             {
                titulo: 'Test 3',
                autor: 'John Doe34',
                isbn: 'A344455',
                paginas: 50,
                editorial: 'Random',
                sinopsis: 'Un clásico MMORPG de fantasía en el continente de MU. Leveo intenso y farmeo de joyas.'
            },
             {
                titulo: 'Test 4',
                autor: 'John Doe454',
                isbn: 'A344545',
                paginas: 20,
                editorial: 'Random',
                sinopsis: 'Un clásico MMORPG de fantasía en el continente de MU. Leveo intenso y farmeo de joyas.'
            }
        ];

        await Libro.bulkCreate(librosDePrueba);
        console.log('¡Base de datos poblada exitosamente con datos de prueba!');

        process.exit(0);
    } catch (error) {
        console.error('Error al poblar la base de datos:', error);
        process.exit(1);
    }
};

seedDatabase();