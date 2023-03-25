import React, { FC } from 'react'
import styles from '../VideoBackgroud/VideoBackgroud.module.scss'

import video from '../../assets/video/video.mp4'

export const VideoBackgroud: FC = () => {
  return (
    <div className={styles.root}>
      <video src={video} autoPlay loop muted />
    </div>
  )
}
