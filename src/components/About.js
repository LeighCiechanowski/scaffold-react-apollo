import React from 'react';
import { Link } from 'react-router-dom';

import Timeline from './Timeline';

const About = () => {
  return (
    <div>
      <h4>
        About
      </h4>
      <Timeline />
      <Link to="/"> Go back to homepage </Link>
    </div>
  );
};

export default About;
