import React from "react";

const PointsOfInterestCard = ({ items }) => {

  return (
    <div className="flex h-[800px] flex-col bg-white">
      <div className="aspect-[570/420] bg-secondary-2"></div>

      <div className="flex flex-grow flex-col gap-3.5 p-5">
        <h3 className="text-lg font-medium">Puntos de Interés</h3>
        <ul className="h-0 flex-grow space-y-1.5 overflow-auto bg-accent p-3">
          {items.map((item) => (
            <li key={item.id} className="bg-white px-4 py-3">
              <h5 className="text-sm">Punto {item.id}</h5>
              <p className="text-xs text-secondary">
                {item.poi_address}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PointsOfInterestCard;
