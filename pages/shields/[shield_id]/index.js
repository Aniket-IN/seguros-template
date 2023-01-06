import React from "react";
import ShieldLayout from "@/components/layouts/ShieldLayout";
import PointsOfInterestCard from "@/components/shields/shield/PointsOfInterestCard";
import PointHistoryCard from "@/components/shields/shield/PointHistoryCard";

export default function index() {
  

  return (
    <ShieldLayout pageTitle="Escudos" headerTitle="Escudos">
      <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <PointsOfInterestCard />
        <PointHistoryCard />
      </div>
    </ShieldLayout>
  );
}
