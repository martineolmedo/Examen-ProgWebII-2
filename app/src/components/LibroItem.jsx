export const LibroItem = ({libro, onClick}) => {
     return (
        <div 
            onClick={() => onClick(libro.id)} 
            style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}
        >
            <h4>{libro.titulo}</h4>
            <p>Autor: {libro.autor}</p>
        </div>
    );
};