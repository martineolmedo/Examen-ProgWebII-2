export const LibroDetails = ({ libro }) => {
    if (!libro) {
        return <p>Selecciona un libro para ver su detalle</p>;
    }

    return (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', border: '1px solid #ddd' }}>
            <h2>{libro.titulo} (ID: {libro.id})</h2>
            <hr />
            <p><strong>Autor:</strong> {libro.autor}</p>
            <p><strong>ISBN:</strong> {libro.isbn}</p>
            <p><strong>Paginas:</strong> {libro.paginas}</p>
            <p><strong>Editorial:</strong> {libro.editorial}</p>
            <p><strong>Sinopsis:</strong> {libro.sinopsis}</p>
        </div>
    );
};