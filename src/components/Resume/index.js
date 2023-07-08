import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = 'https://drive.google.com/file/d/1-O9SNgRiVN_pp1anesFalzNQ2UphYUcf/view?usp=drive_link' ; 
  }, [navigate]);

  return <div>Redirecting...</div>; 
};

export default Resume;