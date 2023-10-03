import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Manan Agarwal</h4>
      <h4>Copyright &copy; 2023 MA</h4>
      <div className='footerLinks'>
        <a href="https://github.com/manan011" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/manan-agarwal011" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:mananagarwal1103@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/mananagarwal1103/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer