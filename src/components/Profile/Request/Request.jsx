import { useEffect, useRef, useState } from "react";
import InputControl from "../../utilities/InputControl/InputControl";
import OrderSubmission from "./OrderSubmission/OrderSubmission";
import RequestProductForm from "./RequestProductForm/RequestProductForm";
import RequsestProductTable from "./RequsestProductTable/RequsestProductTable";
import Hightlight from "../../utilities/Hightlight/Hightlight";

const Request = () => {
  const inputRef = useRef(null);
  const [file, setFile] = useState();
  const [preview, setpreview] = useState();
  const [products, setProducts] = useState([]);
  const [imageIsInvalid, setImageIsInvalid] = useState(false);
  // const [description, setDescription] = useState('');

  const addProductHandler = (product) => {
    setProducts((prevState) => [...prevState, product]);
  };

  const removeProductHandler = (id) => {
    setProducts((prevState) => prevState.filter((p) => p.id !== id));
  };
  const fileRemoveHandler = () => {
    setpreview("");
    setFile("");
  };
  const fileUploadHandler = () => {
    inputRef.current.click();
  };
  const fileChangeHandler = ({ target }) => {
    const file = target.files[0];
    if (!file) return;
    const allowedExtensions = ["jpg", "jpeg", "png", "pdf", "doc", "docx"];

    const subs = file.name.toLowerCase().split(".");

    if (!allowedExtensions.includes(subs[subs.length - 1])) {
      setImageIsInvalid(true);
      target.value = "";
      return false;
    } else setImageIsInvalid(false);

    setFile(file);
  };

  // const descriptionHandler = ({target}) => {
  //   setDescription(target.value);
  // }

  const submitHandler = () => {
    console.log({
      products,
      prescription: "NOT IMPLEMENTED THIS FEATURE YET!",
      // description,
      orderFrom: "REQUEST ORDER",
    });
  };

  useEffect(() => {
    if (!file) {
      setpreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setpreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <div className="mt-8 container req-producr">
      <div className="req-min-con">
        <Hightlight type="info" className="mb-16">
          <p>
            <strong>Note: </strong>Product availability & price will be
            confirmed over Phone/E-mail/Whatsapp. Delivery Charge within Dhaka
            City 80TK & outside Dhaka 120TK.
          </p>
        </Hightlight>
        <RequestProductForm onAddProduct={addProductHandler} />
        <RequsestProductTable
          products={products}
          onRemoveProduct={removeProductHandler}
        />
        <div className="product-image-upload-Handler">
          <div class="flex g-8 wrap preview">
            {file && (
              <div className="h-100-min w-100-min image-preview justify-content">
                <div className="image-preview width-height ">
                  {file && <img src={preview} alt="img" />}
                  <span
                    onClick={fileRemoveHandler}
                    className="remove-font style"
                  >
                    Remove
                  </span>
                </div>
              </div>
            )}
            <div
              class="h-100-min w-100-min bg-gray center pointer"
              onClick={fileUploadHandler}
            >
              <div>
                <span class="t-48 t-bold t-center t-white">+</span>
                <input
                  type="file"
                  id="file"
                  ref={inputRef}
                  onChange={fileChangeHandler}
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
          <div className="new-add-pimg form__control mb-16 flex">
            <InputControl
              name={"prescription"}
              label={"Upload Request Product Images"}
              required
              className="brick"
              type="file"
              onChange={fileChangeHandler}
            />
            {imageIsInvalid && (
              <div class="alert alert-error">
                Only JPG JPEG PNG format acceptable.
              </div>
            )}
          </div>
        </div>

        <div className="new-desc-pimg form__control mb-16">
          <label htmlFor="desc">Desription</label>
          <textarea name="" id="desc"></textarea>
        </div>
        <OrderSubmission onSubmit={submitHandler} />
      </div>
    </div>
  );
};

export default Request;
