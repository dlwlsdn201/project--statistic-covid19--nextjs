import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='block-left'>
        <span className='footer-content'>
          <strong className='footer-content-label'>데이터 출처:</strong>
          <Link href='https://www.data.go.kr/'>
            <span className='link-content'>
              <span className='resource-link'>공공데이터포털</span>
              <FiExternalLink size={"0.9em"} color={"#d3d7db"} />
            </span>
          </Link>
        </span>
        <span className='footer-content'>
          <strong className='footer-content-label'> 메일:</strong>
          dlwlsdn201@naver.com
        </span>
      </div>
      <div className='block-right'>
        <div className='footer-content icons-wrapper'>
          <Link href='https://github.com/dlwlsdn201/'>
            <span className='icon'>
              <BsGithub size={"1.4em"} />
            </span>
          </Link>
          <Link href='https://www.instagram.com/binary_wooo/'>
            <span className='icon'>
              <BsInstagram size={"1.4em"} />
            </span>
          </Link>
        </div>
      </div>
      {/* <span className='lookup-time'>{`(${nowTime} 기준)`}</span> */}
    </div>
  );
};

export default Footer;
