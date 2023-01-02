import { setLoaded } from "@/redux/pageSlice"
import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react'
import { Toaster } from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import FullPageLoader from "../FullPageLoader"

const AppLayout = ({ pageMode = 'public', children }) => {
  const loggedIn = useSelector(state => state.user.logged_in)
  const isLoaded = useSelector(state => state.page.loaded)
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(() => {
    return !isLoaded
  });


  const handleRedirects = () => {

    if (pageMode == 'guest' && loggedIn) {
      return router.push('/dashboard')
    }

    if (pageMode == 'protected' && !loggedIn) {
      return router.push('/')
    }

    dispatch(setLoaded(true))
    setIsLoading(false)
  }

  useEffect(() => {
    handleRedirects()
  }, [isLoading, loggedIn, pageMode])


  // if (isLoading) {
  //   return null
  // }

  if (isLoading) {
    return <FullPageLoader />
  }

  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={true}
      />
      {children}
    </>
  )
}

export default AppLayout