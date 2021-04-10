import { useContext } from "react";
import { PageContext } from "./PageContext";

function Menu({ pages }) {
  const { pageValue, setPageValue } = useContext(PageContext);

  return (
    <div className="menu">
      {pages?.map((page, index) => (
        <button
          key={index}
          onClick={() => setPageValue(page.slug)}
          className={`menu__button ${pageValue === page.slug ? "active" : ""}`}
        >
          {page.title}
        </button>
      ))}
    </div>
  );
}

export default Menu;
