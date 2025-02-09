import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const slideImages = [
  {
    url: '/img/avatar-image-1.png', // Ensure this path is correct
    caption: 'Project 1',
  },
  {
    url: '/img/feather-pen-1.png',
    caption: 'Project 2',
  },
  {
    url: '/img/tag-1.png',
    caption: 'Project 3',
  },
];
const Slideshow = () => {
  return (
    <section className="slideshow">
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="card">
            <img
              src={slideImage.url}
              alt={slideImage.caption}
              className="card-image"
            />
            <div className="card-caption">{slideImage.caption}</div>
          </div>
        ))}
      </Slide>
      <button onClick={() => document.querySelector('.slide-container .next').click()}>
        Next
      </button>
      <button onClick={() => document.querySelector('.slide-container .prev').click()}>
        Previous
      </button>
    </div>
    </section>
  );
};

export default Slideshow;
