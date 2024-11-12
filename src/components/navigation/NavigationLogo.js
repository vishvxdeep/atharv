import { NavLink } from "react-router-dom";
import IconBlack from "../../assets/images/vk.png";
import ScrollToTop from "../../helpers/ScrollToTop";

const NavigationLogo = (props) => {
  return (
    <NavLink
      to="/"
      className="navigation__logo"
      onClick={() => {
        ScrollToTop();
        props.closeMenu();
      }}
    >
      <img src={IconBlack} alt="" aria-hidden="true"></img>
    </NavLink>
  );
};

export default NavigationLogo;
