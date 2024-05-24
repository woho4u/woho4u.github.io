"use client";
import { useState } from "react";
import Navlink from "./Navlink";

interface Props {
  className?: string;
  Class?: string;
}

const Header = ({ className, Class }: Props) => {
  return (
    <>
      <div className={`w-full ${className} header px-10 py-4`}>
        <div className="navbar flex">
          <div className="nav-block">
            <a className="home-logo" href="#">
              {/* Oliver Kvamme Eriksen */}
            </a>
          </div>

          <div className="nav-block">
            <div className="nav-item">
              <Navlink title="Home" Class={Class} />
            </div>
            <div className="nav-item">
              <Navlink link="#about-me" title="About" Class={Class} />
            </div>
            <div className="nav-item">
              <Navlink link="#projects" title="Projects" Class={Class} />
            </div>
            <div className="nav-item">
              <Navlink link="#contact-me" title="Contact" Class={Class} />
            </div>
          </div>

          {/* <div className="box-1">
            <div className="btn btn-one">
              <span>
                <Navlink title="Home" Class={Class} />
              </span>
            </div>
          </div>

          <div className="box-1">
            <div className="btn btn-one">
              <span>
                <Navlink link="#About" title="about" Class={Class} />
              </span>
            </div>
          </div>

          <div className="box-1">
            <div className="btn btn-one">
              <span>
                <Navlink link="#projects" title="Projects" Class={Class} />
              </span>
            </div>
          </div>

          <div className="box-1">
            <div className="btn btn-one">
              <span>
                <Navlink link="#contact-me" title="Contact" Class={Class} />
              </span>
            </div>
          </div> */}

          {/* <Navlink title="About" bgClass={bgClass} />
          <Navlink link="#footer" title="Contact Me" bgClass={bgClass} /> */}
        </div>
      </div>
    </>
  );
};

export default Header;
