import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'


const ProfileCard = () => {


    const ProfilePage = true;

  return (
    <div className="ProfileCard">

        <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>
        
        <div className="ProfileName">
            <span>Ranu Agita F</span>
            <span>Fullstack developer</span>
        </div>

        <div className="followersBox">
            <hr />
            <div>
                <div className="follower">
                    <span>9.999</span>
                    <span>Follower</span>
                </div>
                <div className="vl"></div>
                <div className="follower">
                    <span>1</span>
                    <span>Following</span>
                </div>

                {ProfilePage && (
                    <>
                    <div className="vl"></div>

                    <div className="follower">
                        <span>3</span>
                        <span>Posts</span>
                    </div>
                    </>
                )}
            </div>
            <hr />
        </div>
            {ProfilePage ? '' : <span>
            MyProfile
        </span>}
        

    </div>
  )
}

export default ProfileCard