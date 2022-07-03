import PrescriptionForm from "../PrescriptionForm/PrescriptionForm";
import PrescriptionCard from "../PrescriptionCard/PrescriptionCard";
import "./Prescriptions.css";
import { Fragment, useState } from "react";
import Popup from "../../utilities/Popup/Popup";
import PrescriptionSaved from "../../Profile/PrescriptionSaved/PrescriptionSaved";
import { useHistory } from "react-router";

const Prescriptions = ({ prescriptions }) => {
  const history = useHistory();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const popupCloseHandler = () => {
    setIsPopupVisible(false);
  };

  const submitHandler = (formData) => {
    console.log(formData);
    // http.file({
    //   url:endpoints.uploadProductImage,
    //   payload:{
    //     Img:formData.file,
    //     From:"Upload Image",
    //     Description:formData.remarks,
    //     activityId:"00000000-0000-0000-0000-000000000000"
    //   },
    //   before:()=>{
    //     console.log("function started")
    //   },
    //   successed:(data)=>{
    //     console.log(data ,'success')
    //   },
    //   failed:()=>{
    //     console.log('failed')
    //   },
    //   always:()=>{
    //     console.log('function end')
    //   }
    // })
    setIsPopupVisible(true);
  };

  const doneHandler = () => {
    setIsPopupVisible(false);
  };

  const orderHandler = () => {
    history.push("/checkout");
  };

  if (prescriptions.length === 0) {
    return (
      <div className="label brick info">
        <p className="t-14 t-center">No Product Image Uploaded Yet!</p>
      </div>
    );
  }

  return (
    <Fragment>
      <div>
        <PrescriptionForm onSubmit={submitHandler} />

        <div className="label brick info mb-16">
          <p className="t-14 t-center">
            {prescriptions.length > 0
              ? `${prescriptions.length} Product Image
            ${prescriptions.length > 1 ? "s" : ""} Found!`
              : "No Product Image Uploaded Yet!"}
          </p>
        </div>

        {prescriptions.length > 0 && (
          <div>
            <div className="prescription-grid">
              {prescriptions.map((prescription) => (
                <PrescriptionCard
                  prescription={prescription}
                  key={prescription.id}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      {isPopupVisible && (
        <Popup title="Order Saved" onClose={popupCloseHandler}>
          <PrescriptionSaved onDone={doneHandler} onOrder={orderHandler} />
        </Popup>
      )}
    </Fragment>
  );
};

export default Prescriptions;
