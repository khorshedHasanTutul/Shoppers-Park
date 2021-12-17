import { useState } from "react";
import { Link } from "react-router-dom";
import Hightlight from "../../../utilities/Hightlight/Hightlight";

const OrderSubmission = ({ onSubmit }) => {
  const [isAgreed, setIsAgreed] = useState(false);

  const submitHandler = () => {
    if(!isAgreed){
      alert('Please agree with out terms and condition to request the order');
      return;
    }
    onSubmit();
  };

  const agreementHandler = () => {
    setIsAgreed(prevState => !prevState);
  }

  return (
    <Hightlight
      type="primary"
      className="flex column justify-center align-center g-16"
    >
      <label className="t-14 t-bold pointer">
        <input
          type="checkbox"
          className="mr-16"
          checked={isAgreed}
          onChange={agreementHandler}
        />
        I have read and agreed to the{" "}
        <Link to="/termscondition">Terms and conditions</Link>
      </label>
      <button
        type="button"
        className="req-btn-add primary brick fill rounded-corner big t-bold"
        onClick={submitHandler}
      >
        Send Product Request
      </button>
    </Hightlight>
  );
};

export default OrderSubmission;