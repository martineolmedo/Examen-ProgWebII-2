import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Taller = sequelize.define('Taller', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,    
        autoIncrement: true,
        allowNull:false   
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,      
    },
    profesor: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    duracionMeses: {
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    costo: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    diaHorario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    requisitos: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'talleres',  
    timestamps: false,        
});

export default Taller;