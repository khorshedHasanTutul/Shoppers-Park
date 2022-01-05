import { NavLink } from "react-router-dom";
import "./SideBarLinks.css";
import { useHistory} from "react-router";
import { useContext } from "react";
import authContext from "../../../Store/auth-context";

const SideBarLinks = () => {
  const history = useHistory();
  const authCtx=useContext(authContext)

  const logout = () => {
    authCtx.logout();
    history.replace("/");
  };
  

  return (
    <div className="sidebar-links">
      <NavLink
        className="kill-anchore block t-14 t-bold sidebar__link"
        activeClassName="active"
        to="/profile/order"
      >
        <span className="flex justify-between align-center">
          <span>Order History</span> <span className='sidebar__icon'>&#10095;</span>
        </span>
      </NavLink>


      <NavLink
        className="kill-anchore block t-14 t-bold sidebar__link"
        activeClassName="active"
        to="/profile/request"
      >
        <span className="flex justify-between align-center">
          <span>Product Request</span> <span className='sidebar__icon'>&#10095;</span>
        </span>
      </NavLink>

      <NavLink
        className="kill-anchore block t-14 t-bold sidebar__link"
        activeClassName="active"
        to="/profile/history"
      >
        <span className="flex justify-between align-center">
          <span>Upolad Image & Order</span> <span className='sidebar__icon'>&#10095;</span>
        </span>
      </NavLink>


      <NavLink
        className="kill-anchore block t-14 t-bold sidebar__link"
        activeClassName="active"
        to="/profile/address"
      >
        <span className="flex justify-between align-center">
          <span>Edit Address</span> <span className='sidebar__icon'>&#10095;</span>
        </span>
      </NavLink>
      <NavLink
        className="kill-anchore block t-14 t-bold sidebar__link"
        activeClassName="active"
        to="/profile/offer"
      >
        <span className="flex justify-between align-center">
          <span>Special Offers</span> <span className='sidebar__icon'>&#10095;</span>
        </span>
      </NavLink>
      <NavLink
        className="kill-anchore block t-14 t-bold sidebar__link"
        activeClassName="active"
        exact
        to="/profile/edit"
      >
        <span className="flex justify-between align-center">
          <span>Edit Profile</span> <span className='sidebar__icon'>&#10095;</span>
        </span>
      </NavLink>

      <NavLink
        className="kill-anchore block t-14 t-bold sidebar__link"
        activeClassName="active"
        to="/profile/complain"
      >
        <span className="flex justify-between align-center">
          <span>Submit Complain</span> <span className='sidebar__icon'>&#10095;</span>
        </span>
      </NavLink>
      
      {/* {authCtx.isLoggedIn && ( )} */}
        <span
          className="kill-anchore block t-14 t-bold sidebar__link warning pointer"
          activeClassName="active"
          onClick={logout}
        >
          Log Out
        </span>
     
    </div>
  );
};

export default SideBarLinks;
