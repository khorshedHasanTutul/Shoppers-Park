import Profile from "../Profile";
import OrderHistory from "../OrderHistory/OrderHistory";
import Address from "../Address/Address";
import Offers from "../Offers/Offers";
import Complain from "../Complain/Complain";
import Request from "../Request/Request";
import Prescription from "../../Profile/Prescriptions/Prescriptions"
import { Route, Switch, Redirect } from "react-router-dom";

const ADDRESS = [{ id: 25 }];

const ProfileBody = () => {
  return (
    <div>
      <Switch>
        <Route path="/profile" exact>
          <Redirect to="/profile/order/all" />
        </Route>
        <Route path="/profile/edit" exact>
          <Profile />
        </Route>
        <Route path="/profile/order" exact>
          <Redirect to='/profile/order/all' />
        </Route>
        <Route path="/profile/order">
          <OrderHistory />
        </Route>
        {/* <Route path="/profile/request">
          <Request></Request>
        </Route> */}
        <Route path="/profile/history">
          <Prescription prescriptions={{ id: 1 }}></Prescription>
        </Route>
        <Route path="/profile/address">
          <Address addresses={ADDRESS} />
        </Route>
        <Route path="/profile/offer">
          <Offers offers={[{ id: 1 }]} />
        </Route>
        <Route path="/profile/complain">
          <Complain />
        </Route>
        <Route path="/profile/logout">
          <h1>Logout</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default ProfileBody;
