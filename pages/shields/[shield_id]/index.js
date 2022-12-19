import React from 'react'
import ShieldLayout from "@/components/layouts/ShieldLayout"
import PointsOfInterestCard from "@/components/shields/shield/PointsOfInterestCard"
import PointHistoryCard from "@/components/shields/shield/PointHistoryCard"

export default function index() {
  return (
    <ShieldLayout pageTitle="Escudos" headerTitle="Escudos">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4">
        <PointsOfInterestCard />
        <PointHistoryCard />
      </div>
    </ShieldLayout>
  )
}
