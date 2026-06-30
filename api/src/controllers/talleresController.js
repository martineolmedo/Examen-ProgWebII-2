import Taller from '../models/talleres.js'

const TalleresController = {
    obtener: async (req, res) => {
        try {
            const data = await Taller.findAll();
            res.json({
                estado: true,
                data,
            });
        } catch (error) {
            console.error('Error al obtener talleres:', error);
            res.status(500).json({
                estado: false,
                mensaje: 'Error al obtener talleres',
                error: error.message,
            });
        }
    },
     obtenerPorId: async (req, res) => {
        try {
            // req.params.id es el id que viene en la URL.
            const id = parseInt(req.params.id, 10);

            // findByPk busca un registro por su clave primaria.
            const data = await Taller.findByPk(id);

            if (!data) {
                // 404 significa "no encontrado".
                return res.status(404).json({
                    estado: false,
                    mensaje: 'Taller no encontrado',
                });
            }

            res.json({
                estado: true,
                data,
            });
        } catch (error) {
            console.error('Error al obtener taller:', error);
            res.status(500).json({
                estado: false,
                mensaje: 'Error al obtener taller',
                error: error.message,
            });
        }
    }
};

export default TalleresController;