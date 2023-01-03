import React from "react";
import Admin from "@/components/layouts/Admin";
import SamplePagination from "@/components/SamplePagination";
import TopBar from "@/components/shields/TopBar";
import ShieldsTable from "@/components/shields/ShieldsTable";

export default function Shields() {
  return (
    <Admin pageTitle="Escudos" headerTitle="Escudos">
      <TopBar />

      <div className="container-padding">
        <ShieldsTable />
        <SamplePagination />
      </div>
    </Admin>
  );
}
