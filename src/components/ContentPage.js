import React from 'react';
import BottomFooter from './BottomFooter'

class ContentPage extends React.Component {
  render() {
    return (
      <div className='content-page-container'>
        <div className='nav-dummy-placeholder'></div>
        <div className='content-page-body-container'>
          <div className='content-page-section-h content-page-margin'>— About Stroke —</div>
          <div className='content-page-h1 content-page-margin'>What causes stroke?</div>
          <div className='content-page-text1 content-page-text content-page-margin'>Stroke is a brain attack which occurs, occurring when the blood supply to any part of the brain is cut off or blocked. It is the second most common cause of death in the world, affecting 17 million people each year  worldwide each year and can change lives for patients
  and their families.</div>
          <div className='sections-blue-border'></div>
          <div className='content-page-text2 content-page-text content-page-margin'>A stroke occurs when the blood supply to any part of the brain is cut off due to either a clot or a bleed. Blood that travels from the heart to the brain contains oxygen, and without this oxygen the cells of the brain cannot survive and will die.</div>
          <div className='content-page-text3 content-page-text content-page-margin'>The two types of stroke – ischaemic stroke and hemorrhagic stroke – can affect the brain in different ways, and therefore often have different causes.</div>
          <div className='content-page-img-container'>
            <div className='content-page-img-holder'>
              <img src='./assets/images/box3.png' />
            </div>
            <div className='content-page-bluebox'>
              <span className='content-page-bluebox-firstword'>85%</span> of strokes are ischaemic strokes.
            </div>
          </div>
          <div className='content-page-h2 content-page-margin'>Ischaemic Strokes</div>
          <div className='content-page-text-4 content-page-text content-page-margin'>As the most common type of stroke, ischaemic strokes occur when a blood clot blocks the flow of blood and oxygen to the brain. This most commonly occurs in areas where the arteries have been narrowed or blocked over time by plaque – or fatty deposits: this is called atherosclerosis.</div>
          <div className='content-page-text-5 content-page-text content-page-margin'>Over time, arteries may naturally become narrower. However, there are factors that can speed the process, including:</div>
          <div className='content-page-text-6 content-page-text content-page-margin'>
            <ol className='content-page-list'>
              <li><span>Smoking</span></li>
              <li><span>High blood pressure</span></li>
              <li><span>Obesity</span></li>
              <li><span>High cholesterol levels</span></li>
            </ol>
          </div>
          <div className='content-page-img-container'>
            <div className='content-page-img-holder'>
              <img src='./assets/images/box3.png' />
            </div>
            <div className='content-page-bluebox'>
            <span className='content-page-bluebox-firstword'>85%</span> of strokes are ischaemic strokes.
            </div>
          </div>
          <div className='content-page-h2 content-page-margin'>H2 Title</div>
          <div className='content-page-text-7 content-page-text content-page-margin'>Nulla facilisi. Fusce tempus et quam eget placerat. Maecenas non elit ac eros dictum laoreet vel nec massa. Nullam varius iaculis dui quis pellentesque.</div>
          <div className='content-page-h3 content-page-margin'>H3 title</div>
          <div className='content-page-text-8 content-page-text content-page-margin'>Morbi malesuada vestibulum consectetur. Morbi eleifend nibh sit amet elit bibendum, ac condimentum massa placerat. Nullam pharetra feugiat condimentum. Fusce purus mauris, auctor eu facilisis vitae, cursus quis mi.</div>
          <div className='content-page-text-9 content-page-text content-page-margin'>
            <ol className='content-page-list'>
              <li><span>Smoking</span></li>
              <li><span>High blood pressure</span></li>
              <li><span>Obesity</span></li>
              <li><span>High cholesterol levels</span></li>
            </ol>
          </div>
          <div className='content-page-text-10 content-page-text content-page-margin'>Morbi malesuada vestibulum consectetur. Morbi eleifend nibh sit amet elit bibendum, ac condimentum massa placerat. Nullam pharetra feugiat condimentum. Fusce purus mauris, auctor eu facilisis vitae, cursus quis mi.</div>
          <div className='content-page-quote content-page-margin'>"Morbi eleifend nibh sit amet elit bibendum, ac condimentum massa placerat. Nullam pharetra feugiat condimentum."</div>
          <div className='content-page-img-container'>
            <div className='content-page-img-holder'>
              <img src='./assets/images/box3.png' />
            </div>
            <div className='content-page-bluebox'>
            <span className='content-page-bluebox-firstword'>85%</span> of strokes are ischaemic strokes.
            </div>
          </div>
        </div>
        <BottomFooter />
      </div>
    );
  }
}

export default ContentPage;
