import { Fragment, useContext } from "react";
import authContext from "../../../Store/auth-context";

const PrescriptionSaved = ({onDone, onOrder}) => {
  const authCtx = useContext(authContext)
  return (
    <Fragment>
      <h2 className='t-bold mb-16 t-center'>Order placed with your product image.</h2>
      <p className='t-center t-primary mb-16'>Our agent will call your number '{authCtx.getloginValue.phone}' to confirm</p>
      <div className='flex justify-end g-8'>
        {/* <button className='brick primary fill round-corner' onClick={onOrder}>Order</button> */}
        <button className='brick primary fill round-corner' onClick={onDone}>Done</button>
      </div>
    </Fragment>
  );
};

export default PrescriptionSaved;
