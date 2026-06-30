import { LibroItem } from "./LibroItem";

export const LibrosList = ({ libros, onLibroSelect }) => {
    if (!libros || libros.length === 0) {
        return <p>No hay libros disponibles en el catálogo.</p>;
    }

    return (
        <div>
            {libros.map((libro) => (
                <LibroItem key={libro.id} libro={libro} onClick={onLibroSelect} />
            ))}
        </div>
    );
};