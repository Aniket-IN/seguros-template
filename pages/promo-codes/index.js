import React, { useEffect } from 'react'
import Admin from "@/components/layouts/Admin"
import SamplePagination from "@/components/SamplePagination"
import TopBar from "@/components/promo-codes/TopBar"
import PromoCodesTable from "@/components/promo-codes/PromoCodesTable"
import { useQuery } from "react-query"
import useAxios from "@/hooks/useAxios"
import { toast } from "react-hot-toast"


export default function PromoCodes() {
  const { axios } = useAxios()
  const fetchPromoCodes = () => {
    return axios.get('/api/admin/promo-code/')
  };

  const { isLoading, data, isError, error } = useQuery('promo-codes', fetchPromoCodes, {
    refetchOnWindowFocus: false
  })

  useEffect(() => {
    if (isError) {
      toast.error(error.message)
    }
  }, [isError])


  const promoCodes = data?.data ?? []

  return (
    <Admin pageTitle="Códigos de Promo" headerTitle="Códigos de Promo">

      <TopBar />

      <div className="container-padding">
        <PromoCodesTable
          promoCodes={promoCodes}
          isLoading={isLoading}
          isError={isError}
          error={error}
        />
        <SamplePagination />
      </div>
    </Admin>
  )
}


