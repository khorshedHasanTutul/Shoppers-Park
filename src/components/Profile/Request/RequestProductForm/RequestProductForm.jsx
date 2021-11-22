import { useState } from "react";
import InputControl from "../../../utilities/InputControl/InputControl";
import classes from "./RequestProductForm.module.css";
import { v4 as uuidv4 } from 'uuid';

const RequestProductForm = ({onAddProduct}) => {
  const [name, setName] = useState('');
  const [strength, setStrength] = useState('');
  const [quantity, setQuantity] = useState('');

  const nameHandler = ({target}) => {
    setName(target.value);
  }



  const strengthHandler = ({target}) => {
    setStrength(target.value);
  }

  const qunatityHandler = ({target}) => {
    setQuantity(target.value);
  }

  const addProductHandler = ({target}) => {
    if(name === '' || quantity === 0 || quantity === ''){
      alert('Fill all required fileds');
      return;
    }

    console.log({name, strength, quantity, id: uuidv4()});

    onAddProduct({name, strength, quantity, id: uuidv4()});

    setQuantity('');
    setStrength('');
    setName('');
  }

  return (
    <div className={`${classes["request-product-form"]} mb-16`}>
      <div className="form__control">
        <InputControl
          name={"name"}
          label={"Name"}
          required
          className="brick"
          type="text"
          placeholder='Ex Make Up'
          value={name}
          onChange={nameHandler}
        />
      </div>
      <div className="form__control">
        <InputControl
          name={"brand"}
          label={"Brand"}
          className="brick"
          type="text"
          placeholder='Ex Skin'
          value={strength}
          onChange={strengthHandler}
        />
      </div>
      <div className="form__control">
        <InputControl
          name={"quantity"}
          label={"Quantity"}
          required
          className="brick"
          type="number"
          placeholder='Quantity in pcs'
          value={quantity}
          onChange={qunatityHandler}
        />
      </div>
      <button className='ex-add-product brick primary fill' onClick={addProductHandler}>Add Product</button>
    </div>
  );
};

export default RequestProductForm;
