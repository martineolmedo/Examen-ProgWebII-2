import dotenv from 'dotenv'; // O el import de dotenvx que estés usando
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Cargamos las variables de entorno PRIMERO
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') }); 

// 2. Importamos la base de datos DINÁMICAMENTE (después de que process.env ya tiene los datos)
const { default: sequelize } = await import('../config/database.js');
const { default: Taller } = await import('../models/talleres.js');

const seedDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');

        await Taller.sync({ force: true });
        console.log('Tabla de talleres sincronizada.');

        const talleresDePrueba = [
            {
                nombre: 'Tejido',
                profesor: 'John Doe22',
                duracionMeses: 10,
                costo: 80.50,
                diaHorario: 'Martes de 20 a 21',
                requisitos: 'Nivel basico'
            },
            {
                nombre: 'Pintura',
                profesor: 'John Doe33',
                duracionMeses: 5,
                costo: 90.50,
                diaHorario: 'Miercoles de 17 a 18',
                requisitos: 'Nivel intermedio'
            },
            {
                nombre: 'Costura',
                profesor: 'John Doe44',
                duracionMeses: 4,
                costo: 100.50,
                diaHorario: 'Jueves de 16 a 17',
                requisitos: 'Nivel Avanzado'
            },
            {
                nombre: 'Ceramica',
                profesor: 'John Doe55',
                duracionMeses: 6,
                costo: 150.50,
                diaHorario: 'Viernes de 19 a 20',
                requisitos: 'Nivel Basico'
            }
        ];

        await Taller.bulkCreate(talleresDePrueba);
        console.log('¡Base de datos poblada exitosamente con datos de prueba!');

        process.exit(0);
    } catch (error) {
        console.error('Error al poblar la base de datos:', error);
        process.exit(1);
    }
};

seedDatabase();