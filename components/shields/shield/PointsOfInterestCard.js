import useAxios from "@/hooks/useAxios";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";

const PointsOfInterestCard = () => {
  const { axios } = useAxios()
  const router = useRouter();

  const { shield_id } = router.query;

  const fetchData = () => {
    return axios.get("/api/shield/shield-point-of-interest/", {
      params: {
        id: shield_id
      }
    });
  }

  // React-query for data fetching
  const { isLoading, isError, refetch, isRefetching, isSuccess, data: response, error } = useQuery(
    `shield-${shield_id}-point-of-interests`,
    fetchData,
    {
      refetchOnWindowFocus: false,
      enabled: !!shield_id
    }
  );

  const items = response?.data ?? []

  return (
    <div className="flex h-[800px] flex-col bg-white">
      <div className="aspect-[570/420] bg-secondary-2"></div>

      <div className="flex flex-grow flex-col gap-3.5 p-5">
        <h3 className="text-lg font-medium">Puntos de Interés</h3>
        <ul className="h-0 flex-grow space-y-1.5 overflow-auto bg-accent p-3">
          {items.map((item, index) => (
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
