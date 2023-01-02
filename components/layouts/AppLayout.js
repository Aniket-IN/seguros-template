import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react'
import { Toaster } from "react-hot-toast"
import { useSelector } from "react-redux"
import FullPageLoader from "../FullPageLoader"

const AppLayout = ({ pageMode = 'public', children }) => {
  const loggedIn = useSelector(state => state.user.logged_in)
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();


  const handleRedirects = async () => {

    if (isLoading && pageMode == 'guest' && loggedIn) {
      return router.push('/dashboard')
    }

    if (isLoading && pageMode == 'protected' && !loggedIn) {
      return router.push('/')
    }

    setIsLoading(false)
  }

  useEffect(() => {
    handleRedirects()
  }, [isLoading, loggedIn, pageMode])


  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={true}
      />
      {isLoading
        ? <FullPageLoader />
        : children
      }
    </>
  )
}

export default AppLayout