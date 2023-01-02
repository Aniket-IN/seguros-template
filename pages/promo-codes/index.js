import React from 'react'
import Admin from "@/components/layouts/Admin"
import SamplePagination from "@/components/SamplePagination"
import TopBar from "@/components/promo-codes/TopBar"
import PromoCodesTable from "@/components/promo-codes/PromoCodesTable"
import { useQuery } from "react-query"
import useAxios from "@/hooks/useAxios"


export default function PromoCodes() {
  const { axios } = useAxios()

  const { isLoading, data } = useQuery('promo-codes', () => {
    return axios.get('/api/admin/promo-code/')
  })

  console.log(data);

  return (
    <Admin pageTitle="Códigos de Promo" headerTitle="Códigos de Promo">

      <TopBar />

      <div className="container-padding">
        <PromoCodesTable />
        <SamplePagination />
      </div>
    </Admin>
  )
}


