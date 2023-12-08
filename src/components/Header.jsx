import { useState } from "react";

import Headerstyle from "./Header.css";
// ICONS
import menuIcon from "../images/icons/menu.png";
import closeIcon from "../images/icons/close.png";
import wineIcon from "../images/icons/wine.png";
import wineglassIcon from "../images/icons/wine-glass.png";
import barrelIcon from "../images/icons/barrel.png";
import awardIcon from "../images/icons/award.png";
import blogIcon from "../images/icons/blog.png";
import crowdIcon from "../images/icons/crowd-of-users.png";
import orderIcon from "../images/icons/order.png";
import homeIcon from "../images/icons/home.png";
import homeHeartIcon from "../images/icons/stay-at-home.png";
import whatsappIcon from "../images/icons/whatsapp.png";
// ACTIVE ICONS
import activewineIcon from "../images/icons/active/wine.png";
import activebarrelIcon from "../images/icons/active/barrel.png";
import activeawardIcon from "../images/icons/active/award.png";
import activeblogIcon from "../images/icons/active/blog.png";
import activecrowdIcon from "../images/icons/active/crowd-of-users.png";
import activeorderIcon from "../images/icons/active/order.png";
import activehomeIcon from "../images/icons/active/home.png";
import activehomeHeartIcon from "../images/icons/active/stay-at-home.png";
// SOCIAL LINKS
import facebookIcon from "../images/icons/social/facebook.png";
import instagramIcon from "../images/icons/social/instagram.png";
import twitterIcon from "../images/icons/social/twitter.png";
import Loading from "./pages/Loading";

const Header = ({
  loading,
  isMenuVisible,
  setMenuVisibility,
  setActivePage,
  triggerLoading,
}) => {
  const links = [
    {
      id: 1,
      link: homeIcon,
      activeLink: activehomeIcon,
      isActive: true,
      description: "ANA SAYFA",
    },
    {
      id: 2,
      activeLink: activewineIcon,
      link: wineglassIcon,
      isActive: false,
      description: "SARAPLARIMIZ",
    },
    {
      id: 3,
      activeLink: activebarrelIcon,
      link: barrelIcon,
      isActive: false,
      description: "SURYANI SARABI",
    },
    {
      id: 4,
      activeLink: activeblogIcon,
      link: blogIcon,
      isActive: false,
      description: "BLOG",
    },
    {
      id: 5,
      activeLink: activecrowdIcon,
      link: crowdIcon,
      isActive: false,
      description: "SURYANILER",
    },
    {
      id: 6,
      activeLink: activehomeHeartIcon,
      link: homeHeartIcon,
      isActive: false,
      description: "MIDYAT",
    },
    {
      id: 7,
      activeLink: activeawardIcon,
      link: awardIcon,
      isActive: false,
      description: "ODULLERIMIZ",
    },
    {
      id: 8,
      activeLink: activeorderIcon,
      link: orderIcon,
      isActive: false,
      description: "SIPARIS",
    },
  ];
  const [navlinks, setLinks] = useState([...links]);

  const handleMenuToggle = () => {
    isMenuVisible ? setMenuVisibility(false) : setMenuVisibility(true);
  };
  const handleClick = (id) => {
    setLinks(
      links.map((link) =>
        link.id === id
          ? { ...link, isActive: true }
          : { ...link, isActive: false }
      )
    );
  };
  return (
    <>
      <header>
        <div>
          <a
            onClick={() => {
              setActivePage(1);
              handleClick(1);
            }}
            className='logo'
          >
            <img src={wineIcon} alt='wine-glass' />
            <h1 className='header-name-container'>
              <div>OMUR</div>
              <div>SURYANI</div>
              <div>SARAP EVI</div>
            </h1>
          </a>
        </div>

        <div className='links'>
          <div>
            {isMenuVisible ? (
              <a href='#'>
                <img onClick={handleMenuToggle} src={menuIcon} alt='' />
              </a>
            ) : (
              <div className='navbar'>
                <a className='closer' onClick={handleMenuToggle} href='#'>
                  <img src={closeIcon} alt='' />
                </a>
                {navlinks.map((link, index) => (
                  <a
                    onClick={() => {
                      handleClick(link.id);
                      setActivePage(link.id);
                      handleMenuToggle();
                    }}
                    key={link.id}
                    id={link.id}
                    className={link.isActive ? "active" : ""}
                  >
                    <img
                      className='mini-icon'
                      src={link.isActive ? link.activeLink : link.link}
                      alt={link.link}
                    />
                    {link.description}
                  </a>
                ))}
                <div className='social-links'>
                  <a
                    href='https://www.facebook.com/omursuryanisarapevi'
                    target='_blank'
                  >
                    <img src={facebookIcon} alt='' />
                  </a>
                  <a
                    href='https://www.instagram.com/omursuryanisarapevi/'
                    target='_blank'
                  >
                    <img src={instagramIcon} alt='' />
                  </a>
                  <a target='_blank' href='https://twitter.com/suryanisarap'>
                    <img src={twitterIcon} alt='' />
                  </a>
                </div>
                <div className='order-now'>
                  <a
                    href='https://api.whatsapp.com/send/?phone=905373972468&text&type=phone_number&app_absent=0'
                    target='_blank'
                    className='order-now-btn'
                  >
                    <img src={whatsappIcon} alt='whatsapp-icon' />
                    SIPARIS VER
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
