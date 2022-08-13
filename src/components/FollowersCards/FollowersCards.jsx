import React from 'react'
import './FollowersCards.css'
import { Followers } from '../../Data/FollowersData'

const FollowersCards = () => {
  return (
    <div className="FollowersCard">
        <h3>Who Is Following me</h3>
        {Followers.map((Follower, id) => {
            return(
                <div className="followers">
                    <div>
                        <img src={Follower.img} alt="" className='followerImage' />
                        <div className="name">
                            <span>{Follower.name}</span>
                            <span>@{Follower.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button'>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCards