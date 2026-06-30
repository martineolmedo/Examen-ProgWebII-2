import { TallerItem } from "./TallerItem";

export const TalleresList = ({ talleres, onTallerSelect }) => {
    if (!talleres || talleres.length === 0) {
        return <p>No hay talleres disponibles en el catálogo.</p>;
    }

    return (
        <div>
            {talleres.map((taller) => (
                <TallerItem key={taller.id} taller={taller} onClick={onTallerSelect} />
            ))}
        </div>
    );
};