// import React from 'react';
// import './index.scss';

// const Experience = () => {
//   return (
//     <div className="experience-container">
//       <div className="timeline">
//         <div className="timeline-item">
//           <div className="timeline-item-content">
//             <h3>Company A</h3>
//             <p>Position: Software Developer</p>
//             <p>Duration: Jan 2020 - Present</p>
//             <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec consectetur diam. Aenean tincidunt feugiat mauris, vel vulputate magna.</p>
//           </div>
//         </div>
//         <div className="timeline-item">
//           <div className="timeline-item-content">
//             <h3>Company B</h3>
//             <p>Position: Front-end Developer</p>
//             <p>Duration: Jun 2018 - Dec 2019</p>
//             <p>Description: Sed aliquam augue nunc, in consectetur neque mollis ut. Phasellus luctus ultricies nisl, sed consectetur nulla vulputate in.</p>
//           </div>
//         </div>
//         {/* Add more timeline items as needed */}
//       </div>
//     </div>
//   );
// };

// export default Experience;



import React from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import experienceData from '../../data/experience.json';
import './index.scss';

const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const renderExperience = (experience) => {
    return (
      <div className="timeline-container">
        {experience
          ?.sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((exp, idx) => {
            const isEven = idx % 2 === 0;
            const timelineItemClass = isEven ? 'timeline-item even' : 'timeline-item odd';

            return (
              <div className={timelineItemClass} key={idx}>
                <div className="timeline-item-content">
                  <div className="timeline-item-header">
                    <h3>{exp.company}</h3>
                    <p>{exp.date}</p>
                  </div>
                  <div className="timeline-item-body">
                    <p>{exp.position}</p>
                    <p>{exp.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <>
      <div className="container experience-page">
        <h1 className="page-title">
          <AnimatedLetters letterClass={letterClass} strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']} idx={15} />
        </h1>
        {renderExperience(experienceData.experience)}
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Experience;
