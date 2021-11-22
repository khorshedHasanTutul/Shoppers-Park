import { Fragment } from "react";

const PrescriptionSaved = ({onDone, onOrder}) => {
  return (
    <Fragment>
      <h2 className='t-bold mb-16 t-center'>Your Presciption Saved Successfully</h2>
      <p className='t-center t-primary mb-16'>Click on <strong>Order</strong> button to order medicine from the prescription</p>
      <div className='flex justify-end g-8'>
        <button className='brick primary fill round-corner' onClick={onOrder}>Order</button>
        <button className='brick primary fill round-corner' onClick={onDone}>Done</button>
      </div>
    </Fragment>
  );
};

export default PrescriptionSaved;
