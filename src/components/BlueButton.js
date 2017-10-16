import React from 'react';

class BlueButton extends React.Component {
  mouseOverHandler () {
      // this.refs.video.play();
      // console.log(this.props.heading);
	}

  mouseOutHandler () {
      // this.refs.video.pause();
	}

  render() {
    return (
      <div>
        <div className='blue-button-container' style={{width:this.props.setWidth}}>
          <div className='blue-button-text'>Learn More</div>
        </div>
      </div>
    );
  }
}

export default BlueButton;
