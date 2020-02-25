import React from 'react'
import './PastGlimpse.scss'

const PastGlimpse = () => {
  return (
    <div className="gallery">
      <h1 className="gallery__title section-title">Past year Glimpses</h1>
      <div className="gallery__images">
        <div className="gallery__images__container">
          <div className="wide" style={{backgroundImage:"url('./media/botrun.png')" }}></div>
          <div className="tall" style={{backgroundImage: "url('./media/git.png')"}}></div>
          <div className="big" style={{backgroundImage: "url('./media/team.png')"}}></div>
          <div className="wide" style={{backgroundImage: "url('./media/ideathon.png')"}}></div>
          <div className="tall" style={{backgroundImage: "url('./media/director.png')"}}></div>
          <div className="" style={{backgroundImage: "url('./media/penumbera.png')"}}></div>
          <div className="wide" style={{backgroundImage: "url('./media/baymax.png')"}}></div>
          <div className="" style={{backgroundImage: "url('./media/webhead.png')"}}></div>
        </div>
      </div>
    </div>
  )
}

export default PastGlimpse
