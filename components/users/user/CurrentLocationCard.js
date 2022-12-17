import React from 'react'

const CurrentLocationCard = () => {
  return (
    <div className="p-5 bg-white self-start">
      <div>
        <h2 className="font-bold text-lg">Ubicación actual</h2>
        <p className="mt-3 font-semibold text-sm">Ubicación actual</p>
        <p className=" text-secondary text-sm mt-1">
          P.º de las Jacarandas 375, Col del Gas, Azcapotzalco, Ciudad de México.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-3 text-sm">
        <dd className="font-semibold">Hora</dd>
        <dd className="font-semibold">Velocidad Actual</dd>
        <dd className="font-semibold text-right">Estado</dd>
        <dl className="text-secondary">Desde 9:10 a.m.</dl>
        <dl className="text-secondary">70km/h</dl>
        <dl className="font-semibold text-primary text-right">En ruta</dl>
      </div>

      <div className="mt-5">
        <div className="aspect-[540/601] bg-accent"></div>
      </div>
    </div>
  )
}

export default CurrentLocationCard