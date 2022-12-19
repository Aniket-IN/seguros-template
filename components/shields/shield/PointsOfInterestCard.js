import React from 'react'

const PointsOfInterestCard = () => {
  return (
    <div className="bg-white flex flex-col h-[800px]">
      <div className="aspect-[570/420] bg-secondary-2"></div>

      <div className="p-5 gap-3.5 flex-grow flex flex-col">
        <h3 className="text-lg font-medium">Puntos de Interés</h3>
        <ul className="p-3 bg-accent space-y-1.5 flex-grow overflow-auto h-0">
          {[...Array(3)].map((item, index) => (
            <li key={index} className="px-4 py-3 bg-white">
              <h5 className="text-sm">Punto 1</h5>
              <p className="text-xs text-secondary">
                De las Jacarandas 375, Col del Gas, Azcapotzalco, Ciudad de México
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PointsOfInterestCard