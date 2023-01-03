import React from "react";

const CurrentLocationCard = () => {
  return (
    <div className="self-start bg-white p-5">
      <div>
        <h2 className="text-lg font-bold">Ubicación actual</h2>
        <p className="mt-3 text-sm font-semibold">Ubicación actual</p>
        <p className=" mt-1 text-sm text-secondary">
          P.º de las Jacarandas 375, Col del Gas, Azcapotzalco, Ciudad de
          México.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-3 text-sm">
        <dd className="font-semibold">Hora</dd>
        <dd className="font-semibold">Velocidad Actual</dd>
        <dd className="text-left font-semibold">Estado</dd>
        <dl className="text-secondary">Desde 9:10 a.m.</dl>
        <dl className="text-secondary">70km/h</dl>
        <dl className="text-left font-semibold text-primary">En ruta</dl>
      </div>

      <div className="mt-5">
        <div className="aspect-[540/601] bg-accent"></div>
      </div>
    </div>
  );
};

export default CurrentLocationCard;
