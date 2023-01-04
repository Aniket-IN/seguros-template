import React from 'react'
import AppLayout from "./AppLayout"
import ReduxWrapper from "./ReduxWrapper"

const DefaultLayout = ({ ...props }) => {
  return (
    <ReduxWrapper>
      <AppLayout {...props} />
    </ReduxWrapper>
  )
}

export default DefaultLayout