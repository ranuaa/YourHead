import React from 'react'
import FollowersCards from '../FollowersCards/FollowersCards'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSide.css'

const ProfileSide = () => {
  return (
   <div className="ProfileSide">
    <LogoSearch/>
    <ProfileCard/>
    <FollowersCards/>
   </div>
  )
}

export default ProfileSide