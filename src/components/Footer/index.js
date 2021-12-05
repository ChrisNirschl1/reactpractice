import React from 'react';

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



function Footer() {
  return (
    <>
      <div className="icons">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/christian-nirschl/"
          rel="noreferrer"
        >
          <div>
            <FaLinkedin />
          </div>
        </a>
        <a
          target="_blank"
          href="https://github.com/ChrisNirschl1"
          rel="noreferrer"
        >
          <div>
            <FaGithub />
          </div>
        </a>
      </div>
    </>
  );
}

export default Footer;