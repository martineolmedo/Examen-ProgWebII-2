import { useState,useEffect } from 'react';

import api from './services/api';
import { LibrosList } from './components/LibrosList';
import { LibroDetails } from './components/LibroDetails';
import { LibroItem } from './components/LibroItem';
import { TalleresList } from './components/TalleresList';
import { TallerDetails } from './components/TallerDetails';
import { TallerItem } from './components/TallerItem';

function App() {
  const [libros, setLibros] = useState([]);
  const [talleres, setTalleres] = useState([]);
  const [libroSeleccionado, setLibro] = useState(null);
  const [tallerSeleccionado, setTaller] = useState(null);
  const [loadingLibro, setLoadingLibro] = useState(false);
  const [loadingTaller, setLoadingTaller] = useState(false);
  const [errorLibro, setErrorLibro] = useState(null);
  const [errorTaller, setErrorTaller] = useState(null);

  useEffect(() => {
        const fetchLibros = async () => {
            setLoadingLibro(true);
            try {
                const response = await api.get('/libros');
                if (response.data.estado) {
                    setLibros(response.data.data);
                }
            } catch (err) {
                setErrorLibro('Error al cargar la lista de libros.');
            } finally {
                setLoadingLibro(false);
            }
        };
        
        fetchLibros();
    }, []);

    useEffect(() => {
        const fetchTalleres = async () => {
            setLoadingTaller(true);
            try {
                const response = await api.get('/talleres');
                if (response.data.estado) {
                    setTalleres(response.data.data);
                }
            } catch (err) {
                setErrorTaller('Error al cargar la lista de talleres.');
            } finally {
                setLoadingTaller(false);
            }
        };
        
        fetchTalleres();
    }, []);

     const handleLibroSelect = async (id) => {
        setLoadingLibro(true);
        setErrorLibro(null);
        try {
            const response = await api.get(`/libros/${id}`);
            if (response.data.estado) {
                setLibro(response.data.data);
            }
        } catch (err) {
            setErrorLibro('Error al obtener los detalles del libro seleccionado.');
        } finally {
            setLoadingLibro(false);
        }
    };

    const handleTallerSelect = async (id) => {
        setLoadingTaller(true);
        setErrorTaller(null);
        try {
            const response = await api.get(`/talleres/${id}`);
            if (response.data.estado) {
                setTaller(response.data.data);
            }
        } catch (err) {
            setErrorTaller('Error al obtener los detalles del taller seleccionado.');
        } finally {
            setLoadingTaller(false);
        }
    };

  return (
  <>
    <div style={{ display: 'flex', gap: '40px', padding: '20px', fontFamily: 'sans-serif' }}>
            <section style={{ flex: '1' }}>
                <h2>Catálogo de Libros</h2>
                {loadingLibro && !libroSeleccionado ? (
                    <p>Cargando lista...</p>
                ) : (
                    <LibrosList libros={libros} onLibroSelect={handleLibroSelect} />
                )}
            </section>
            
            <section style={{ flex: '1' }}>
                <h2>Detalle del Libro</h2>
                {errorLibro && <p style={{ color: 'red' }}>{errorLibro}</p>}
                <LibroDetails libro={libroSeleccionado} />
                {loadingLibro && libroSeleccionado && <p>Actualizando detalles...</p>}
            </section>
      </div>
      <div style={{ display: 'flex', gap: '40px', padding: '20px', fontFamily: 'sans-serif' }}>
            <section style={{ flex: '1' }}>
                <h2>Catálogo de Talleres</h2>
                {loadingTaller && !tallerSeleccionado ? (
                    <p>Cargando lista...</p>
                ) : (
                    <TalleresList talleres={talleres} onTallerSelect={handleTallerSelect} />
                )}
            </section>
            
            <section style={{ flex: '1' }}>
                <h2>Detalle del Taller</h2>
                {errorTaller && <p style={{ color: 'red' }}>{errorTaller}</p>}
                <TallerDetails taller={tallerSeleccionado} />
                {loadingTaller && tallerSeleccionado && <p>Actualizando detalles...</p>}
            </section>
      </div>
  </>
  )
}

export default App;
