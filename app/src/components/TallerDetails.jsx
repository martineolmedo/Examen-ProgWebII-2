export const TallerDetails = ({ taller }) => {
    if (!taller) {
        return <p>Selecciona un taller para ver su detalle</p>;
    }

    return (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', border: '1px solid #ddd' }}>
            <h2>{taller.nombre} (ID: {taller.id})</h2>
            <hr />
            <p><strong>Profesor:</strong> {taller.profesor}</p>
            <p><strong>Duracion:</strong> {taller.duracionMeses} meses.</p>
            <p><strong>Costo:</strong> ${taller.costo}</p>
            <p><strong>Dias:</strong> {taller.diaHorario}</p>
            <p><strong>Requisitos:</strong> {taller.requisitos}</p>
        </div>
    );
};