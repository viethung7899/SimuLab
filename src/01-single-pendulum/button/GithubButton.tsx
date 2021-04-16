import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import IconButton from './IconButton';

const GithubButton = () => {
  const redirect = () => {
    window.location.href = '/';
  };

  return (
    <IconButton buttonClass="github-button" icon={faGithub} action={redirect} />
  );
};

export default GithubButton;
