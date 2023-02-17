import React from "react";
import ShieldLayout from "@/components/layouts/ShieldLayout";
import PointsOfInterestCard from "@/components/shields/shield/PointsOfInterestCard";
import PointHistoryCard from "@/components/shields/shield/PointHistoryCard";
import useAxios from "@/hooks/useAxios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export default function index() {
  const { axios } = useAxios();
  const router = useRouter();

  const { shield_id } = router.query;

  const fetchData = () => {
    return axios.get("/api/shield/shield-point-of-interest/", {
      params: {
        id: shield_id,
      },
    });
  };

  // React-query for data fetching
  const {
    isLoading,
    isError,
    refetch,
    isRefetching,
    isSuccess,
    data: response,
    error,
  } = useQuery(`shield-${shield_id}-point-of-interests`, fetchData, {
    refetchOnWindowFocus: false,
    enabled: !!shield_id,
  });

  const pois = response?.data ?? [];

  return (
    <ShieldLayout pageTitle="Escudos" headerTitle="Escudos">
      <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <PointsOfInterestCard items={pois} />
        <PointHistoryCard pois={pois} />
      </div>
    </ShieldLayout>
  );
}
