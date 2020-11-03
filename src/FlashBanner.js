import React from 'react';
import './FlashBanner.css';
import hudVideo from './hud.mp4'

class FlashBanner extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = {
      bannerAnimationFinished: false
    }
  }

  handleAnimationEnd = () => {
    this.setState({ bannerAnimationFinished: true });
//    this.videoRef.current.play();
  }

  render() {
    return ( 
      <>
      <video
        loop
        autoPlay
        ref={this.videoRef}
        muted
        style={{
          position: 'absolute',
          width: '100%',
          left: '0%',
          top: '0%',
          height: '100%',
          zIndex: '-11'
        }}
      >
        <source src={hudVideo} type='video/mp4' />
      </video>
      <div className={this.state.bannerAnimationFinished ? 'top-block-close' : 'top-block'} />

      <div onAnimationEnd={this.handleAnimationEnd} className={this.state.bannerAnimationFinished ? 'banner-text-ended' : 'banner-text'}>
        {this.props.children}
      </div>

      <div className={this.state.bannerAnimationFinished ? 'bottom-block-close' : 'bottom-block' } />
      </>
    )
  }

}

export default FlashBanner;