// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Resume = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.location.href = 'https://drive.google.com/file/d/1-O9SNgRiVN_pp1anesFalzNQ2UphYUcf/view?usp=drive_link' ; 
//   }, [navigate]);

//   return <div>Redirecting...</div>; 
// };

// export default Resume;

// import React, { useEffect } from 'react';

// const Resume = () => {
//   useEffect(() => {
//     window.open('https://drive.google.com/file/d/1-O9SNgRiVN_pp1anesFalzNQ2UphYUcf/view?usp=drive_link', '_blank');
//   }, []);

//   return <div>Redirecting...</div>;
// };
//Last working link:
// https://drive.google.com/file/d/1-O9SNgRiVN_pp1anesFalzNQ2UphYUcf/view?usp=drive_link
// export default Resume;


import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const resumeUrl = 'https://drive.google.com/file/d/1-O9SNgRiVN_pp1anesFalzNQ2UphYUcf/view?usp=drive_link';
    window.open(resumeUrl, '_blank');

    navigate('/Contact'); // Navigates to the portfolio route
  }, [navigate]);

  return <div>Redirecting...</div>;
};

export default Resume;
