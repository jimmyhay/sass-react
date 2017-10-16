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
        <div className='blue-button-container'>
          <span className='blue-button-text'>Learn More</span>
        </div>
      </div>
    );
  }
}

export default BlueButton;
