import React from "react";
import Link from "next/link";
import Admin from "@/components/layouts/Admin";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import CompanyTabNav from "./company/CompanyTabNav";
import CompanyCard from "./company/CompanyCard";
import useAxios from "@/hooks/useAxios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";


const CompanyLayout = ({ children, pageTitle = null, headerTitle = "" }) => {
  const { axios } = useAxios()
  const router = useRouter();

  const { company_id } = router.query;

  const fetchData = () => {
    return axios.get(`/api/company/company-single/${company_id}`);
  }

  // React-query for data fetching
  const { isLoading, isError, refetch, isRefetching, isSuccess, data: response, error } = useQuery(
    `company-${company_id}-details`,
    fetchData,
    {
      refetchOnWindowFocus: false,
      enabled: !!company_id
    }
  );

  const company = response?.data?.data ?? {}


  return (
    <Admin pageTitle={pageTitle} headerTitle={headerTitle}>
      <section className="container-padding space-y-5">
        <Link
          href="/companies"
          className="inline-flex items-center pt-5 hover:text-primary hover:underline"
        >
          <ChevronLeftIcon className="h-8 w-8" />
          <span>Volver</span>
        </Link>

        <h2 className="text-2xl font-medium capitalize">{company.name}</h2>
      </section>

      <section className="container-padding mt-6">
        <div className="gap-5 2xl:flex">
          <div className="w-full flex-shrink-0 2xl:max-w-xs">
            <CompanyCard {...{ company, isSuccess }} />
          </div>

          <div className="flex-grow">
            <CompanyTabNav />

            {children}
          </div>
        </div>
      </section>
    </Admin>
  );
};

export default CompanyLayout;
