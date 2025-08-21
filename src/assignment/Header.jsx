

import React from 'react';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PHONE_NUMBER } from './constant';
import { SOCIAL_LINKS } from './constant';




function Header() {


  return (
    <header className="text-white" style={{ backgroundColor: "#3e3e3e" }}>
      <div
        className="container-fluid border-top border-bottom border-white py-3"
      >
        <div className="row align-items-center ">

          <div className=" col-4 col-md-2 col-lg-2 text-center text-md-start  border-end border-white">
            <p className="fs-5 m-0 text-center">CreativeLogo</p>

            {/* <img
              src={require("../images/download (1).png")}
              alt="logo"
              className="img-fluid"
              style={{ maxWidth: "100px" }}
            /> */}
          </div>



          <div className="col-lg-7 col-md-5  d-none d-md-flex d-lg-flex">
            <nav className="navbar navbar-expand-lg  navbar-expand-md navbar-dark p-0">

              <div className=" d-flex gap-5  gap-md-2 gap-lg-5 align-items-center justify-content-between" id="navbarNav">
                <ul className="navbar-nav fw-bold fs-6">
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">HOME</a>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-white"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"> SERVICE</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#">service</a></li>
                      <li><a className="dropdown-item" href="#">service</a></li>
                      <li><a className="dropdown-item" href="#">Something </a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">link</a></li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">PAGES</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">SHOP</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">BLOG</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">CONTACT</a>
                  </li>
                </ul>


                <div className="d-flex gap-3">
                  {SOCIAL_LINKS.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                      >
                        <Icon size={25} color={social.color} />
                      </a>
                    );
                  })}
                </div>





              </div>
            </nav>
          </div>

          <div className=" col-4 col-lg-1 col-md-6  text-center py-2 border-start border-end   border-white">
            <FontAwesomeIcon icon={faSearch} className="fs-4" />
          </div>

          <div className='col-4  text-center  mx-auto  border-white d-flex d-lg-none d-md-none justify-content-center align-items-center'>
            <button class="btn text-light  " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> <FontAwesomeIcon icon={faBars} className="fs-1 " /> </button>
          </div>


          <div className="col-12 col-md-6 col-lg-2 py-2  border-white text-center text-md-start">
            <p className="m-0 small">Need help?</p>
            <p className="m-0 fw-bold">{PHONE_NUMBER}</p>
          </div>

        </div>
      </div>


      <div class="offcanvas offcanvas-end h-50" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">Dev-Paul</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <nav className="navbar navbar-dark p-0">


            <div className="justify-content-between mx-3" id="navbarNav">
              <ul className="navbar-nav fw-bold   fs-6">
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">HOME</a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"> SERVICE</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">service</a></li>
                    <li><a className="dropdown-item" href="#">service</a></li>
                    <li><a className="dropdown-item" href="#">Something </a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">link</a></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">PAGES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">SHOP</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">BLOG</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">CONTACT</a>
                </li>
              </ul>

              <div className="d-flex gap-3 mt-3">
                {SOCIAL_LINKS.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <Icon size={25} color={"#0f0101ff"} />
                    </a>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

