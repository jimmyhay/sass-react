import React from 'react';

class HomepageSection extends React.Component {
  mouseOverHandler () {
      this.refs.video.play();
	}

  mouseOutHandler () {
      this.refs.video.pause();
	}

  render() {
    return (
      <div>
        <div className='video-overlay-two' style={{backgroundColor:this.props.color}} onMouseOver={this.mouseOverHandler.bind(this)}
        onMouseOut={this.mouseOutHandler.bind(this)}>
            <div className='homepage-section-bits'>
              <h2>About Stroke</h2>
              <div className='homepage-section-subtext-1'>Stroke is a brain attack, occurring when the blood supply to any part of the brain is cut off or blocked. </div>
              <div className='homepage-section-subtext-2'>Find out more about stroke, the causes, effects, the different types, and other general information.</div>
              {/*}<div className='homepage-section-clear'/>*/}
            </div>
            <div className='homepage-section-video-container'>
              <video ref='video' loop='true' className="homepage-section-video-background" muted='true'>
                <source src={this.props.video} type="video/mp4"></source>
              </video>
            </div>
            {/*}<div className='homepage-section-video-overlay'></div>*/}
        </div>
      </div>
    );
  }
}

export default HomepageSection;
