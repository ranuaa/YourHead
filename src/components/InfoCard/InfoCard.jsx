import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModal from '../ProfileModal/ProfileModal'

const InfoCard = () => {


    const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className='InfoCard'>
        <div className="infoHead">
            <h4>Your Profile</h4>
            <div>


            <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)} />
            <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
            </div>
        </div>

        <div className="info">
            <span><b>Status : </b></span><span>Jones</span>
        </div>
        <div className="info">
            <span><b>Lives In : </b></span>
            <span>Gotham City</span>
        </div>
        <div className="info">
            <span><b>Birthday : </b></span>
            <span>Aug 1945</span>
        </div>
        <button className="button logout-button">Log Out</button>
    </div>
  )
}

export default InfoCard