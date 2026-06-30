import Libro from '../models/libros.js';

const LibrosController = {
    obtener: async (req, res) => {
        try {
            const data = await Libro.findAll();
            res.json({
                estado: true,
                data,
            });
        } catch (error) {
            console.error('Error al obtener libros:', error);
            res.status(500).json({
                estado: false,
                mensaje: 'Error al obtener libros',
                error: error.message,
            });
        }
    },
     obtenerPorId: async (req, res) => {
        try {
            // req.params.id es el id que viene en la URL.
            const id = parseInt(req.params.id, 10);

            // findByPk busca un registro por su clave primaria.
            const data = await Libro.findByPk(id);

            if (!data) {
                // 404 significa "no encontrado".
                return res.status(404).json({
                    estado: false,
                    mensaje: 'Libro no encontrado',
                });
            }

            res.json({
                estado: true,
                data,
            });
        } catch (error) {
            console.error('Error al obtener libro:', error);
            res.status(500).json({
                estado: false,
                mensaje: 'Error al obtener libro',
                error: error.message,
            });
        }
    }
};

export default LibrosController;