import React from "react";
import Link from "next/link";
import Admin from "@/components/layouts/Admin";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import ShieldCard from "./shield/ShieldCard";
import ShieldTabNav from "./shield/ShieldTabNav";
import { useQuery } from "react-query";
import useAxios from "@/hooks/useAxios";
import { useRouter } from "next/router";
import { format } from "date-fns";

const ShieldLayout = ({ children, pageTitle = null, headerTitle = "" }) => {
  const { axios } = useAxios()
  const router = useRouter();

  const { shield_id } = router.query;

  const fetchData = () => {
    return axios.get(`/api/shield/get-single/${shield_id}`);
  }

  // React-query for data fetching
  const { isLoading, isError, refetch, isRefetching, isSuccess, data: response, error } = useQuery(
    `shield-${shield_id}-details`,
    fetchData,
    {
      refetchOnWindowFocus: false,
      enabled: !!shield_id
    }
  );

  const shield = response?.data?.data ?? {}


  return (
    <Admin pageTitle={pageTitle} headerTitle={headerTitle}>
      <section className="container-padding space-y-5">
        <Link
          href="/shields"
          className="inline-flex items-center pt-5 hover:text-primary hover:underline"
        >
          <ChevronLeftIcon className="h-8 w-8" />
          <span>Volver</span>
        </Link>

        <h2 className="text-2xl font-medium capitalize">{shield.shield_name}</h2>
      </section>

      <section className="container-padding mt-6">
        <div className="gap-5 2xl:flex">
          <div className="w-full flex-shrink-0 2xl:max-w-xs">
            <ShieldCard {...{ isSuccess, shield }} />
          </div>

          <div className="flex-grow">
            <ShieldTabNav />

            {children}
          </div>
        </div>
      </section>
    </Admin>
  );
};

export default ShieldLayout;
