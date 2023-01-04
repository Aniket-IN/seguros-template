import React, { useEffect, useState } from "react";
import Admin from "@/components/layouts/Admin";
import SamplePagination from "@/components/SamplePagination";
import PaymentMembershipsTable from "@/components/payment-memberships/PaymentMembershipsTable";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "react-query";
import { toast } from "react-hot-toast";
import InputGroup from "@/components/utility/InputGroup";
import FilterDropDownBtn from "@/components/utility/FilterDropDownBtn";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function PaymentMemberships() {
  const { axios } = useAxios();
  const [search, setSearch] = useState("");
  const [filterString, setFilterString] = useState("");
  const [filters, setFilters] = useState({});

  const perPage = 10;

  const onFiltersApply = () => {
    let flatFilters = [];
    Object.keys(filters).forEach(function (key, index) {
      flatFilters = flatFilters.concat(filters[key]);
    });
    setFilterString(flatFilters.join("+"));
  };

  const fullSearchString =
    search + (filterString ? (search ? "+" : "") + filterString : "");
  const fetchData = () => {
    return axios.get("/api/Membership/payments/", {
      params: {
        limit: perPage,
        search: fullSearchString,
      },
    });
  };

  const { isLoading, data, isError, error } = useQuery(
    ["payment-memberships", fullSearchString],
    fetchData,
    {
      refetchOnWindowFocus: false,
      cacheTime: 0,
    }
  );

  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError]);

  const count = data?.count;
  const memberships = data?.data.results ?? [];

  return (
    <Admin pageTitle="Pagos Membresías" headerTitle="Pagos Membresías">
      <div className="bg-neutral">
        <div className="container-padding items-center gap-3 space-y-2 py-2.5 lg:flex lg:space-y-0">
          <div className="w-full flex-shrink-0 sm:w-auto">
            <InputGroup className=" relative">
              <div className="absolute inset-y-0 left-0 flex w-9 items-center justify-center p-1 px-1.5 pl-3 text-secondary">
                <MagnifyingGlassIcon className="aspect-square w-full" />
              </div>
              <InputGroup.Input
                id="search"
                type="search"
                name="search"
                className="pl-9"
                placeholder="Buscar"
              />
            </InputGroup>
          </div>

          <div className="flex flex-grow items-center gap-3">
            <FilterDropDownBtn.Primary
              filters={filters}
              setFilters={setFilters}
              onApply={onFiltersApply}
              groups={[
                {
                  id: 1,
                  title: "Membership",
                  options: [
                    {
                      id: 1,
                      label: "Nivel 1",
                      name: "membership",
                      value: "level1",
                    },
                    {
                      id: 2,
                      label: "Nivel 2",
                      name: "membership",
                      value: "level2",
                    },
                    {
                      id: 3,
                      label: "Nivel 3",
                      name: "membership",
                      value: "level3",
                    },
                  ],
                },
                {
                  id: 2,
                  title: "Status",
                  options: [
                    {
                      id: 1,
                      label: "Efectuado",
                      name: "status",
                      value: "effected",
                    },
                    {
                      id: 2,
                      label: "Pending",
                      name: "status",
                      value: "pending",
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="container-padding">
        <PaymentMembershipsTable
          isLoading={isLoading}
          isError={isError}
          error={error}
          memberships={memberships}
        />
        <SamplePagination />
      </div>
    </Admin>
  );
}
