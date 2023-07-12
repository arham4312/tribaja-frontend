import React from 'react'
import { FC } from 'react'
// import "./reviewCard.scss"
import {ReactComponent as SpotifyLogo} from '../../assets/icons/spotifyLogo.svg'


const ReviewCard:FC = () => {
  return (
    <div className='review-card'>
         <SpotifyLogo/>
    </div>
  )
}

export default ReviewCard;