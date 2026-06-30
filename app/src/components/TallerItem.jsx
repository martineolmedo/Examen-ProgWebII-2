export const TallerItem = ({taller, onClick}) => {
     return (
        <div 
            onClick={() => onClick(taller.id)} 
            style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}
        >
            <h4>{taller.nombre}</h4>
            <p>Profesor: {taller.profesor}</p>
        </div>
    );
};