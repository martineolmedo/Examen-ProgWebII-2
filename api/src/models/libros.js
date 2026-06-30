import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Libro = sequelize.define('Libro', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,    
        autoIncrement: true,
        allowNull:false   
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,      
    },
    autor: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    isbn: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    paginas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    editorial: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sinopsis: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'libros',  
    timestamps: false,        
});

export default Libro;