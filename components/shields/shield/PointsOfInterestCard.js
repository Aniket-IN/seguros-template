import React from "react";

const PointsOfInterestCard = () => {
  return (
    <div className="flex h-[800px] flex-col bg-white">
      <div className="aspect-[570/420] bg-secondary-2"></div>

      <div className="flex flex-grow flex-col gap-3.5 p-5">
        <h3 className="text-lg font-medium">Puntos de Interés</h3>
        <ul className="h-0 flex-grow space-y-1.5 overflow-auto bg-accent p-3">
          {[...Array(3)].map((item, index) => (
            <li key={index} className="bg-white px-4 py-3">
              <h5 className="text-sm">Punto 1</h5>
              <p className="text-xs text-secondary">
                De las Jacarandas 375, Col del Gas, Azcapotzalco, Ciudad de
                México
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PointsOfInterestCard;
