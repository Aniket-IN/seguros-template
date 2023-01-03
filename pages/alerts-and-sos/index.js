import React from "react";
import Admin from "@/components/layouts/Admin";
import SamplePagination from "@/components/SamplePagination";
import AlertsSOSTable from "@/components/alerts-and-sos/AlertsSOSTable";
import TopBar from "@/components/alerts-and-sos/TopBar";

export default function AlertsAndSOS() {
  return (
    <Admin pageTitle="Alertas y SOS" headerTitle="Alertas y SOS">
      <TopBar />

      <div className="container-padding">
        <AlertsSOSTable />
        <SamplePagination />
      </div>
    </Admin>
  );
}
