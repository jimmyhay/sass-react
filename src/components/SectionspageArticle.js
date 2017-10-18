import React from 'react';
import BlueButton from './BlueButton';

class SectionspageArticle extends React.Component {
  constructor(props) {
      super(props);

      // this.doGreyBackground = this.doGreyBackground.bind(this);
   }

  doGreyBackground() {
    console.log(this.props.grey);
    if (this.props.grey == 'false') {
      console.log('should change color');
      return {backgroundColor: '#ffffff'};
    }
  }

  render() {
    return (
      <div className='sections-article-container' style={this.doGreyBackground()}>
        <div className='sections-article-img-container'>
          <img src='./assets/images/background.jpg' />
        </div>
        <div className='sections-article-text-container'>
          <div className='sections-article-text-heading'><h4>Signs & Symptoms</h4></div>
          <div className='sections-article-subtext-1'>Stroke is a brain attack, occurring when the blood supply to any part of the brain is cut off or blocked.</div>
          <div className='sections-article-subtext-2'>Find out more about stroke, the causes, effects, the different types, and other general information.</div>
          <BlueButton setWidth='218px' />
        </div>
      </div>
    );
  }
}

export default SectionspageArticle;
