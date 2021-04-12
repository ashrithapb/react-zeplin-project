import React, { useContext } from "react";
import { PageContext } from "./PageContext";

function Content({ pages }) {
  const { pageValue } = useContext(PageContext);

  return (
    <div className="content">
      {pages?.map(
        (page, index) =>
          page.slug === pageValue && (
            <React.Fragment key={index}>
              {page.blocks?.map((block, index) => (
                <React.Fragment key={index}>
                  <div className="content__row">
                    <div className="content__row-left">{block.headline}</div>
                    <div className="content__row-right">{block.subhead}</div>
                  </div>
                </React.Fragment>
              ))}
            </React.Fragment>
          )
      )}
    </div>
  );
}

export default Content;
