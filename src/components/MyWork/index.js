import React from 'react';
import './index.scss'
// import './ImageGallery.scss';

const ImageGallery = ({ imageSources }) => {
    return (
      <div className="image-gallery">
        {imageSources.map((src, index) => (
          <div key={index} className="image-gallery__item">
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    );
  };
  
  const App = () => {
    const imageSources = [
      'pic_1.jpg',
      'pic_2.jpg',
      'pic_3.jpg',
      // Add more image sources as needed
    ];
  
    return <ImageGallery imageSources={imageSources} />;
  };
  
  export default App;