import Profile from "../Profile";
import OrderHistory from "../OrderHistory/OrderHistory";
import Offers from "../Offers/Offers";
import Complain from "../Complain/Complain";
import Prescription from "../../Profile/Prescriptions/Prescriptions";
import { Route, Switch, Redirect } from "react-router-dom";
import Address from "../../CheckOut/Address";
import AddressContextProvider from "../../../Store/AddressContextProvider";
import RequestHistory from "../RequestHistory/RequestHistory";

const ProfileBody = ({ getProfileInfoHttp }) => {
  return (
    <div>
      <Switch>
        <Route path="/profile" exact>
          <Redirect to="/profile/order/all" />
        </Route>
        <Route path="/profile/edit" exact>
          <Profile getProfileInformation={getProfileInfoHttp} />
        </Route>
        <Route path="/profile/order" exact>
          <Redirect to="/profile/order/all" />
        </Route>
        <Route path="/profile/order">
          <OrderHistory />
        </Route>
        <Route path="/profile/request">
          <RequestHistory />
        </Route>
        <Route path="/profile/history">
          <Prescription prescriptions={{ id: 1 }}></Prescription>
        </Route>
        <Route path="/profile/address">
          <AddressContextProvider>
            <Address />
          </AddressContextProvider>
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
