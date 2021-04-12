import React, { useContext } from "react";
import { PageContext } from "./PageContext";
import { BsArrowRight } from "react-icons/bs";

function Footer({ pages }) {
  const { pageValue } = useContext(PageContext);

  return (
    <div className="footer">
      {pages?.map(
        (page, index) =>
          page.slug === pageValue && (
            <React.Fragment key={index}>
              {page.blocks?.map((block, index) => (
                <React.Fragment key={index}>
                  <div className="footer__row">
                    <div className="footer__row-left">
                      {block.eta ? block.eta : block.points}
                    </div>
                    <div className="footer__row-right">
                      <button className="footer__row-button">
                        LET'S TALK. <BsArrowRight className="footer__arrow" />
                      </button>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </React.Fragment>
          )
      )}
    </div>
  );
}

export default Footer;
