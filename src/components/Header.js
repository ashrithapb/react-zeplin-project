import Logo from "./Logo";
import Menu from "./Menu";

function Header({ pages }) {
  return (
    <div className="header">
      <div className="header__row">
        <Logo />
        <button className="header__button">Contact Us</button>
      </div>

      <Menu pages={pages} />
    </div>
  );
}

export default Header;
