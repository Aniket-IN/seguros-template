import React, { createElement } from 'react'

const ProfilePicture = ({ as = 'img', src = null, ...props }) => {
  return (
    createElement(as, {
      ...props,
      src: src ? src : '/assets/img/default-profile-pic-1.jpg',
    })
  )
}

export default ProfilePicture