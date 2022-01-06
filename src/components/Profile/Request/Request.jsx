import { useState } from "react";
import InputControl from "../../utilities/InputControl/InputControl";
import OrderSubmission from "./OrderSubmission/OrderSubmission";
import RequestProductForm from "./RequestProductForm/RequestProductForm";
import RequsestProductTable from "./RequsestProductTable/RequsestProductTable";
import Hightlight from "../../utilities/Hightlight/Hightlight"

const Request = () => {
  const [products, setProducts] = useState([]);
  // const [description, setDescription] = useState('');

  const addProductHandler = (product) => {
    setProducts(prevState => [...prevState, product]);
  }

  const removeProductHandler = (id) => {
    setProducts(prevState => prevState.filter(p => p.id !== id));
  }

  // const descriptionHandler = ({target}) => {
  //   setDescription(target.value);
  // }

  const submitHandler = () => {
    console.log({
      products,
      prescription: 'NOT IMPLEMENTED THIS FEATURE YET!',
      // description,
      orderFrom: 'REQUEST ORDER'
    });
  }



  return (
    <div className="mt-8 container req-producr">
      <div className="req-min-con">
      <Hightlight type="info" className="mb-16">
        <p>
          <strong>Note: </strong>Product availability & price will be confirmed
          over Phone/E-mail/Whatsapp. Delivery Charge within Dhaka City 80TK &
          outside Dhaka 120TK.
        </p>
      </Hightlight>
      <RequestProductForm onAddProduct={addProductHandler}/>
      <RequsestProductTable products={products} onRemoveProduct={removeProductHandler}/>
      <div className="new-add-pimg form__control mb-16 flex">
        <InputControl
          name={"prescription"}
          label={"Upload Request Product Images"}
          required
          className="brick"
          type="file"
        />
      </div>
      <div className="new-desc-pimg form__control mb-16">
        <label htmlFor="desc">Desription</label>
        <textarea name="" id="desc"></textarea>
      </div>
      <OrderSubmission onSubmit={submitHandler}/>
      </div>
    </div>
  );
};

export default Request;
