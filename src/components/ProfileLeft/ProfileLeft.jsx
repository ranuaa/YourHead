import React from 'react'
import FollowersCards from '../FollowersCards/FollowersCards'
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'

const ProfileLeft = () => {
  return (
    <div className='ProfileSide'>
        <LogoSearch/>
        <InfoCard/>
        <FollowersCards/>
    </div>
  )
}

export default ProfileLeft