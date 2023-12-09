import React, { lazy, useState } from "react";

import StarImg from "./StarImg";
import previousArrow from "../../../images/icons/left-arrow.png";
import nextArrow from "../../../images/icons/right-arrow.png";
import comments from "../../assets/comments.json";
import LightComment from "./LightComments";
const ClientComment = lazy(() => import("./ClientComment"));
const Comments = () => {
  const [active, setActive] = useState(1);
  const clientComments = comments.comments;

  const handleClick = (e) => {
    setActive(Number(e.target.getAttribute("data-value")));
  };
  const handleNext = (e) => {
    active === clientComments.length ? setActive(1) : setActive(active + 1);
  };
  const handlePrevious = (e) => {
    active === 1 ? setActive(clientComments.length) : setActive(active - 1);
  };
  const hideName = (user) => {
    const fName = user.split(" ");
    const letters = [];
    fName.forEach((str) => letters.push(str.charAt(0).toUpperCase() + "***"));
    return letters.join(" ");
  };
  clientComments.forEach((cl) => hideName(cl.user));
  return (
    <>
      <LightComment />
      <div className='comment-container'>
        <h4 className='comment-header'>Müşteri yorumlarımız</h4>
        <div className='main-part'>
          <div onClick={handlePrevious} className='previous navigate'>
            <img src={previousArrow} alt='' />
          </div>

          {
            <ClientComment
              hideName={hideName}
              client={clientComments[active - 1]}
            />
          }
          <div onClick={handleNext} className='next navigate'>
            <img src={nextArrow} alt='' />
          </div>
        </div>
        <div className='dots'>
          {clientComments.map((__, index) => {
            return (
              <div
                key={index}
                onClick={handleClick}
                data-value={index + 1}
                className={active === index + 1 ? "dot active-dot" : "dot"}
              ></div>
            );
          })}
          ;
        </div>
      </div>
    </>
  );
};

export default Comments;
